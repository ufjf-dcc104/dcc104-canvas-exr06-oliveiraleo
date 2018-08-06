//Texto da tela
function Text(font, size, rgb) {
	this.font = font 	|| "Courier";
	this.size = size 	|| 20;
	this.color = rgb 	|| "#000000" ;

	this.raster = function(ctx, text, x, y) {
		ctx.font = "" + this.size + "px " + this.font;
		ctx.fillStyle = this.color;
		ctx.fillText(text, x, y);// escreve na tela
	}
}

//variaveis globais
var ctx = null;
var tamCelula = 32; //tamanho da celula do mapa
var mapax = 20, mapay = 20; //tamnhos da matriz do mapa
var cells = []; //instancia o mapa vazio
var sprite = new Sprite(cells); //instancia o jogador
//variaveis do jogo
var bombas = 0;
//var tesouros = 0;
var tempo = 100;
//instancia o texto da tela
var textoFps = new Text("Courier", 15, "black");
var textoBombas = new Text("Courier", 20, "black");
var textoTesouros = new Text("Courier", 20, "black");
var textoTempo = new Text("Courier", 20, "black");
//tamanhos reais do mapa na tela
const WIDTH = mapax * tamCelula;
const HEIGHT = mapay * tamCelula;

cells = [ // cria o mapa vazio
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var segundoAtual = 0, fps = 0, ultimoSegundo = 0;

function start() { //load do jogo
  ctx = document.getElementById('game').getContext('2d');
  requestAnimationFrame(drawGame);
  ctx.clearRect(0,0, 400, 400); //limpa o mapa
  ctx.font = "bold 10pt sans-serif";

  preencheMapa();
};

function drawGame(){
  //if(ctx==null){ return; }//A tela do jogo não iniciou

  var segundo = Math.floor(Date.now()/1000);
  if(segundo != segundoAtual){
    segundoAtual = segundo;
    ultimoSegundo = fps;
    fps = 1;
  }else {
    fps++;
  }

  desenhaMapa();
  /*sprite.desenharQuadrado();
  sprite.mover();
  sprite.colisaoObjeto();*/
  //Exibe o fps do jogo
  //ctx.fillStyle = "red";
  //ctx.fillText("FPS:" + ultimoSegundo, 10, 20);

  sprite.draw(ctx, tamCelula);
  sprite.mover(ctx);

  exibeTextoTela();

  requestAnimationFrame(drawGame);
}
//altera os identificadores do mapa para preenche-lo
function preencheMapa() {
  var rand;
  var numeroTesouros = 0;
  var linhaTesouro = -1;

  for (var i = 0; i < mapax; i++) {
    for (var j = 0; j < mapay; j++) {
      rand = Math.random() * 100;
      cells[i][j] = 1;//limpa o mapa, tudo vazio
      cells[1][1] = 8;//posicao do sprite
      //cells[mapax-1][mapay-1] = 5;
      if(rand <= 20 && //coloca as bombas primeiro, em rand% das celulas
      (i != 1 || j!= 1)) {//aloca espaco para o personagem
        cells[i][j] = 2;
      }if(i==0 || i==19 || j==0 || j==19){//parede //moldura do mapa
        cells[i][j] = 0;
      }else if(rand >= 95 && //aguarda as bombas serem colocadas
        numeroTesouros < 5 && //coloca os tesouros
        linhaTesouro != i && //nao deixa dois tesouros na mesma linha
        (i != 1 || j!= 1)) {//aloca espaco para o personagem
        cells[i][j] = 3;//define o tesouro no mapa
        numeroTesouros++;//aumenta o numero de desouros no registro
        linhaTesouro = i;//define a linha do ultimo desouro (para nao repetir)
      }
    }
  }
}

function exibeTextoTela() {
  //FPS
  //ctx.fillStyle = "red";
  //ctx.fillText("FPS:" + ultimoSegundo, 10, 20);
  textoFps.raster(ctx, "FPS: " + ultimoSegundo, HEIGHT-70, 20);

  textoBombas.raster(ctx, "Bombas:" + bombas, 10, 20);
  textoTesouros.raster(ctx, "Tesouros:" + sprite.tesouros, 130, 20);
  textoTempo.raster(ctx, "Tempo:" + tempo, 270, 20);
}

function verificaondeestou() {
  //
}

function sensor() {
  //
}
//desenha o mapa na tela
function desenhaMapa() {
  for (var x = 0; x < cells.length; x++) {
    for (var y = 0; y < cells[0].length; y++) {
      //switch (mapa[((x*mapax)+y)]) {
      switch (this.cells[y][x]) {
        case 0://parede
        ctx.fillStyle = "grey";
        ctx.fillRect(x*this.tamCelula, y*this.tamCelula, this.tamCelula, this.tamCelula);

        //ctx.strokeStyle = "red";
        //ctx.strokeRect(x*this.tamCelula, y*this.tamCelula, this.tamCelula, this.tamCelula);
        break;
        case 1://celula vazia
        ctx.strokeStyle = "black";
        ctx.strokeRect(x*this.tamCelula, y*this.tamCelula, this.tamCelula, this.tamCelula);
        ctx.fillStyle = "green";
        ctx.fillRect(x*this.tamCelula, y*this.tamCelula, this.tamCelula, this.tamCelula);
        break;
        case 2://bomba
        ctx.fillStyle = "red";
        ctx.fillRect(x*this.tamCelula, y*this.tamCelula, 20, 20);
        ctx.strokeStyle = "purple";
        ctx.strokeRect(x*this.tamCelula, y*this.tamCelula, this.tamCelula, this.tamCelula);
        //ctx.fillStyle = "green";
        //ctx.fillRect(x*this.tamCelula, y*this.tamCelula, this.tamCelula, this.tamCelula);
        break;
        case 3://tesouro
        ctx.fillStyle = "yellow";
        ctx.fillRect(x*this.tamCelula, y*this.tamCelula, 20, 20);
        ctx.strokeStyle = "black";
        ctx.strokeRect(x*this.tamCelula, y*this.tamCelula, this.tamCelula, this.tamCelula);
        //ctx.fillStyle = "green";
        //ctx.fillRect(x*this.tamCelula, y*this.tamCelula, this.tamCelula, this.tamCelula);
        break;
        case 5://teste em branco
        //
        break;
        case 8://sprite
        //posiciona o sprite no espaco alocado
        sprite.x = x;
        sprite.y = y;
        //fundo do sprite
        ctx.fillStyle = "green";
        ctx.fillRect(x*tamCelula, y*tamCelula, tamCelula, tamCelula);
        //contorno do fundo
        ctx.strokeStyle = "black";
        ctx.strokeRect(x*this.tamCelula, y*this.tamCelula, this.tamCelula, this.tamCelula);
        break;
        default:
        //
        break;
      }
    }
  }
}

addEventListener("keydown", function(e){
  switch (e.keyCode) {
    case 38://cima

      break;
    case 40://baixo
      sprite.vy+=1;
      e.preventDefault();
      break;
    case 37://esquerda

      break;
    case 39://direita

      break;
    default:
    break;
  }
});

addEventListener("keyup", function(e){
  switch (e.keyCode) {
    case 38://cima

      break;
    case 40://baixo
      //sprite.x+=1;
      break;
    case 37://esquerda

      break;
    case 39://direita

      break;
    default:

  }
});
