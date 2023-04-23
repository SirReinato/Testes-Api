const btn = document.getElementById("btn");

// add o click para disparar a função de criar a tela
btn.addEventListener("click", pegandoPalavra);
function pegandoPalavra(event) {
  event.preventDefault();
  const palavra = document.getElementById("palavra");
  testeApi02();
}

// PROMISE, captando API
async function testeApi02() {
  try {
    const pegandoDado = await fetch(
      `https://dicio-api-ten.vercel.app/v2/${palavra.value}`
    );
    const convertendoDado = await pegandoDado.json();
    var tela = document.getElementById("tela");
    layoutTela(tela, convertendoDado);
  } catch (erro) {
    console.log("Ta errado essa porra");
  }
}

// Layout da tela de resposta
function layoutTela(event, converte) {
   event.innerHTML += `
    <div class="after">
      <h3 class="cabecalho">Etimologia</h3>
      <p class="significados"> <span class="enfase">Palavra: ${palavra.value}</span>  ${converte[0].etymology}</p>
      <h3 class="cabecalho">partOfSpeech</h3>
      <p class="significados">${converte[0].partOfSpeech}</p>
      <h3 class="cabecalho">Exemplos</h3>
      <p class="significados">Ex. ${converte[0].meanings[0]}</p>
      <p class="significados">Ex. ${converte[0].meanings[1]}</p>
      <p class="significados">Ex. ${converte[0].meanings[2]}</p>
      <p class="significados">Ex. ${converte[0].meanings[3]}</p>
    </div>
  `;
  btn.addEventListener('click', ()=>{
    location.reload();
  })
}
