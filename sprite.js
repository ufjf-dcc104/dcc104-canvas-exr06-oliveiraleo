//propriedades do Sprite
function Sprite(){
  //
}
//move o sprite
this mover = function(ctx) {
  //armazena a posicao do sprite
  this.celulax = Math.floor(this.vx);
  this.celulay = Math.floor(this.vy);
  //desenha o sprite no quadrado certo
  // x e y sao a posicao do sprite total
  // celulax e a posicao do sprite na matriz, ocupando todo o quadrado
  this.x =  this.celulax * map.SIZE;
  this.y =  this.celulay * map.SIZE;
}
