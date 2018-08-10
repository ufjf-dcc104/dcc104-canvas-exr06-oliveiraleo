//propriedades do Sprite
function Sprite(mapa){
  this.height = 32;
  this.width = 32;
  this.vx = this.celulax = 1;
  this.vy = this.celulay = 1;
  this.x = this.celulax * 32;
  this.y = this.celulay * 32;
  this.life = 1;
  this.tesouros = 0;
  //this.bombas = 0;
  this.sentido = 0;

  //move o sprite
  this.mover = function(ctx) {
    //armazena a posicao do sprite
    //console.log(this.vy);
    this.celulax = Math.floor(this.vx);
    this.celulay = Math.floor(this.vy);
    //desenha o sprite no quadrado certo
    // x e y sao a posicao do sprite total
    // celulax e a posicao do sprite na matriz, ocupando todo o quadrado
    this.x =  this.celulax * 32;
    this.y =  this.celulay * 32;
    //this.vx += 1;
  }
  //desenha o sprite na tela
  this.draw = function (ctx, tamCelula){
    //console.log(tamCelula);
    ctx.fillStyle = "purple";//cor do sprite
    ctx.fillRect(this.x+6, this.y+6, 20, 20);//desenha o sprite com 20x20 no meio da celula
    ctx.strokeStyle = "black";
    ctx.strokeRect(this.x+6, this.y+6, 20, 20);
  }
}
