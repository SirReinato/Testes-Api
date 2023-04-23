const galeria = document.getElementById('galeria');
galeria.addEventListener('click', maisOuMenos)
var valor = 200;

async function testeApi02() {
  try {
    const pegandoDado = await fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"
    );
    const convertendoDado = await pegandoDado.json();
    var convertendoFoto = convertendoDado.photos[maisOuMenos(galeria)];

    var colocanodImg = document.getElementById('tela');

    colocanodImg.innerHTML += desenharNaTela(convertendoFoto);
    console.log(convertendoDado);
    return convertendoDado;
  } catch (erro) {
    console.log('Ta errado essa porra');
  }
}


function maisOuMenos(event) {
  if (event.target.id === 'menos') {
    valor = valor - 1;
  } else {
    valor = valor + 1;
    
  }
  console.log(valor);
  return valor;
}
function desenharNaTela(event) {
  return  `
    <img id="marsRouver" src="${event.img_src}" alt="surfando na onda">
    <figcaption>Data Na Terra: ${event.earth_date}</figcaption>
    `
}

(testeApi02());
