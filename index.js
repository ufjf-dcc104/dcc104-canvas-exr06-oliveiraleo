var ctx = null;
var tamCelula = 32;
//var celulay = 40;
var mapax = 20, mapay = 20;
var cells = [];
//var canvas = 0;
/*
cells[0]=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
cells[1]=[0, 6, 1, 1, 1, 1, 1, 1, 1, 0];
cells[2]=[0, 1, 1, 1, 1, 1, 3, 1, 1, 0];
cells[3]=[0, 1, 1, 1, 1, 1, 1, 1, 1, 0];
cells[4]=[0, 1, 1, 2, 1, 1, 1, 1, 1, 0];
cells[5]=[0, 1, 1, 1, 1, 1, 1, 1, 1, 0];
cells[6]=[0, 1, 1, 1, 1, 1, 2, 6, 1, 0];
cells[7]=[0, 1, 3, 1, 1, 1, 1, 1, 1, 0];
cells[8]=[0, 1, 1, 1, 1, 3, 1, 1, 1, 0];
cells[9]=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
*/
cells = [
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

  ctx.fillStyle = "red";
  ctx.fillText("FPS:" + ultimoSegundo, 10, 20);

  requestAnimationFrame(drawGame);
}

function preencheMapa() {
  var rand;
  var numeroTesouros = 0;
  var linhaDesouro = -1;

  for (var i = 0; i < mapax; i++) {
    for (var j = 0; j < mapay; j++) {
      rand = Math.random() * 100;
      cells[i][j] = 1;
      //console.log(rand,numeroTesouros);
      if (rand <= 20) {//bomba
        cells[i][j] = 2;
      }
      if(i==0 || i==19 || j==0 || j==19){//parede //moldura do mapa
        cells[i][j] = 0;
      }else if (rand >= 95 && numeroTesouros < 5 && linhaDesouro != i) {//tesouro
        cells[i][j] = 3;//define o desouro
        numeroTesouros++;//aumenta o numero de desouros no registro
        linhaDesouro = i;//define a linha do ultimo desouro (para nao repetir)
      }
    }
  }
}

function verificaondeestou() {
  //
}

function desenhaMapa() {
  for (var x = 0; x < cells.length; x++) {
    for (var y = 0; y < cells[0].length; y++) {
      //switch (mapa[((x*mapax)+y)]) {
      switch (this.cells[y][x]) {
        case 0://parede
        ctx.fillStyle = "grey";
        ctx.fillRect(x*this.tamCelula, y*this.tamCelula, this.tamCelula, this.tamCelula);

        ctx.strokeStyle = "red";
        ctx.strokeRect(x*this.tamCelula, y*this.tamCelula, this.tamCelula, this.tamCelula);
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
        case 5:

        break;
        case 8://sprite
        /*var sprite = new Sprite();
        sprite.x = x;
        sprite.y = y;*/
        break;
        default:
        //ctx.fillStyle = "green";
        //ctx.fillRect(x*tamCelula, y*tamCelula, tamCelula, tamCelula);
      }

    }
  }
}
