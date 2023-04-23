const api = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL";
const tela = document.getElementById("cotacoes");

// pegando os dados da Api
async function cotacoesGerias() {
  try {
    const preparando = await fetch(api);
    const pronto = await preparando.json();

    tela.innerHTML += desenhandoTela(pronto);
  } catch (error) {
    console.log("Ta errado tio");
  }
}
cotacoesGerias();

// função para criar o html da pagina desenhado de maneira correta
function desenhandoTela(event) {
  return `
    <div>
        <header class="cotacoes-header">
          <h2>Teste Api 02</h2>
          <h3>Esse teste tem como finalidade 
          atualizar em tempo real os valores</h3>
        </header>
        <h2 class="tituloApi">${event.EURBRL.name}</h2>
        <p> <span> Compra: </span>${event.EURBRL.ask}</p>
        <p><span>Venda: </span>${event.EURBRL.bid}</p>
        <p> <span> Data/Hora: </span>${event.EURBRL.create_date}</p>
    </div>
    <div>
        <h2 class="tituloApi tPB">${event.USDBRL.name}</h2>
        <p> <span> Compra: </span>${event.USDBRL.ask}</p>
        <p><span>Venda: </span>${event.USDBRL.bid}</p>
        <p> <span> Data/Hora: </span>${event.USDBRL.create_date}</p>
    </div>
    <div>
        <h2 class="tituloApi tPB">${event.BTCBRL.name}</h2>
        <p> <span> Compra: </span>${event.BTCBRL.ask}</p>
        <p><span>Venda: </span>${event.BTCBRL.bid}</p>
        <p> <span> Data/Hora: </span>${event.BTCBRL.create_date}</p>
    </div>
    `;
}
