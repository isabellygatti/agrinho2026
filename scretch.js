let cena = 1;
let crescimento = 20;

function setup() {
  createCanvas(900, 500);
}

function draw() {

  if (frameCount < 300) {
    cena = 1;
  } else if (frameCount < 600) {
    cena = 2;
  } else {
    cena = 3;
  }

  if (cena === 1) {
    problema();
  } else if (cena === 2) {
    solucao();
  } else {
    resultado();
  }
}
