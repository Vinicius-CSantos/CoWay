//Código do ator

let xAtor = 85
let yAtor = 370
let colisao = false;
let comprimentoCarro = 50;
let alturaCarro = 40;
let diametro = 15;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, 100, yAtor, 25, 25)
}

function movimentaAtor(){
  
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
     yAtor += 3;
    }
  }
}

function verificaColisao(){

  for (let i = 0; i < imagemCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, diametro)
    if (colisao){
     voltaAtorParaPosicaoInicial()
      somDaColisao.play()
      if(pontosMaiorQueZero()){
      meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}
function incluiPontos(){
  textAlign(CENTER);
  textSize(25)
  fill(color(255, 0, 0))
  text(meusPontos, width / 5, 27);  
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial()
  }  
}
function pontosMaiorQueZero(){
  return meusPontos > 0;
}
function podeSeMover(){
  return yAtor < 366;
}
