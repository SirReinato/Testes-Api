async function testeApi02() {
  try {
    const pegandoDado = await fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"
    );
    const convertendoDado = await pegandoDado.json();
    var imagens = convertendoDado.photos[0];
    console.log(imagens.img_src);

    console.log(convertendoDado);
    return convertendoDado;
  } catch (erro) {
    console.log('Ta errado essa porra');
  }
}

console.log(testeApi02());
