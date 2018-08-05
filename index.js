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

/*
for (var r = 0; r < mapax; r++) {
this.cells[r] = [];
for (var c = 0; c < mapay; c++) {
this.cells[r][c] = 0;
}
}*/
//loadMapa();

var segundoAtual = 0, fps = 0, ultimoSegundo = 0;

/*var mapa = [
[0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
[0, 1, 5, 1, 1, 1, 1, 1, 1, 0],
[0, 1, 1, 1, 1, 1, 3, 1, 1, 0],
[0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
[0, 1, 1, 2, 1, 1, 1, 1, 1, 0],
[0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
[0, 1, 1, 1, 1, 1, 2, 1, 1, 0],
[0, 1, 3, 1, 1, 1, 1, 1, 1, 0],
[0, 1, 1, 1, 1, 3, 1, 1, 1, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];*/

function start() {
  ctx = document.getElementById('game').getContext('2d');
  requestAnimationFrame(drawGame);
  ctx.clearRect(0,0, 400, 400);
  ctx.font = "bold 10pt sans-serif";

  preencherBomba();
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

/*function loadMapa() {
for (var i = 0; i < this.mapa.length; i++) {
for (var j = 0; j < this.mapa[i].length; j++) {
switch (mapa[i][j]) {
case 0://parede
this.cells[i][j] = 1;
break;
case 1://vazia
this.cells[i][j] = 2;
//pc.x = (i+0.5)*this.SIZE;
//pc.y = (j+0.5)*this.SIZE;
//pc.imgKey = "pc";
break;
case 2://bomba
this.cells[i][j] = 3;
break;
case 3://moeda
this.cells[i][j] = 4;
break;
case 8://moeda
this.cells[i][j] = 8;
break;
default:
this.cells[i][j] = 5;
}
}
}
}
*/
function preencherBomba() {
  var rand;

  for (var i = 0; i < mapax; i++) {
    for (var j = 0; j < mapay; j++) {
      rand = Math.random() * 100;
      cells[i][j] = 1;

      if (rand <= 30) {
        cells[i][j] = 2;

      }
      if(i==0 || i==19 || j==0 || j==19){
        cells[i][j] = 0;
      }

    }
  }
}
function preencherTesouro() {
  var rand;
  for (var i = 0; i < array.length; i++) {
    for (var i = 0; i < array.length; i++) {
      array[i]
    }
    array[i]

  }
}

function verificaondeestou() {

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
        ctx.fillStyle = "green";
        ctx.fillRect(x*this.tamCelula, y*this.tamCelula, this.tamCelula, this.tamCelula);
        break;
        case 5:

        break;
        case 8://sprite
        /*var sprite = new Sprite();
        sprite.x = x;
        sprite.y = y;*/
        break;
        default:
        ctx.fillStyle = "green";
        ctx.fillRect(x*tamCelula, y*tamCelula, tamCelula, tamCelula);
      }

    }
  }
}
