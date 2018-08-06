//propriedades do Sprite
function Sprite(mapa){
  this.height = 32;
  this.width = 32;
  this.vx = this.celulax = 1;
  this.vy = this.celulay = 1;
  this.x = this.celulax * mapa.SIZE;
  this.y = this.celulay * mapa.SIZE;
  this.life = 1;
  this.pontos = 0;
  this.sentido = 0;

  //move o sprite
  this.mover = function(ctx) {
    //armazena a posicao do sprite
    this.celulax = Math.floor(this.vx);
    this.celulay = Math.floor(this.vy);
    //desenha o sprite no quadrado certo
    // x e y sao a posicao do sprite total
    // celulax e a posicao do sprite na matriz, ocupando todo o quadrado
    this.x =  this.celulax * map.SIZE;
    this.y =  this.celulay * map.SIZE;
  }
  //desenha o sprite na tela
  this.draw = function (ctx, tamCelula){
    ctx.fillStyle = "purple";//cor do sprite
    ctx.fillRect(this.x*(tamCelula+6), this.y*(tamCelula+6), 20, 20);//desenha o sprite com 20x20 no meio da celula
    ctx.strokeStyle = "black";
    ctx.strokeRect(this.x*(tamCelula+6), this.y*(tamCelula+6), 20, 20);
  }
}
