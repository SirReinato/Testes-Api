async function testeApi02() {
  try {
    const pegandoDado = await fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"
    );
    const convertendoDado = await pegandoDado.json();
    var convertendoFoto = convertendoDado.photos[120];
    var colocanodImg = document.getElementById('tela');

    colocanodImg.innerHTML += `
    <img id="marsRouver" src="${convertendoFoto.img_src}" alt="surfando na onda">
    <figcaption>Data Na Terra${convertendoFoto.earth_date}</figcaption>
    `
    
    console.log(convertendoFoto);


    // colocarFoto.src.innerHTML += convertendoFoto.img_src;

    console.log(convertendoDado);
    return convertendoDado;
  } catch (erro) {
    console.log('Ta errado essa porra');
  }
}

console.log(testeApi02());
