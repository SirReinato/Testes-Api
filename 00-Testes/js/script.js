const api = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL";
const tela = document.getElementById("cotacoes");

// pegando os dados da Api
async function cotacoesGerias() {
  try {
    const preparando = await fetch(api);
    const pronto = await preparando.json();

    tela.innerHTML += desenhandoTela(pronto);
    return pronto;
  } catch (error) {
    console.log("Ta errado tio");
  }
}

setInterval(cotacoesGerias(), 10000);
// função para criar o html da pagina desenhado de maneira correta
function desenhandoTela(event) {
    return `
    <div>
        <h2>${event.EURBRL.name}</h2>
        <p>Compra: ${event.EURBRL.ask}</p>
        <p>Venda: ${event.EURBRL.bid}</p>
        <p>Data/Hora: ${event.EURBRL.create_date}</p>
    </div>
    <div>
        <h2>${event.USDBRL.name}</h2>
        <p>Compra: ${event.USDBRL.ask}</p>
        <p>Venda: ${event.USDBRL.bid}</p>
        <p>Data/Hora: ${event.USDBRL.create_date}</p>
    </div>
    <div>
        <h2>${event.BTCBRL.name}</h2>
        <p>Compra: ${event.BTCBRL.ask}</p>
        <p>Venda: ${event.BTCBRL.bid}</p>
        <p>Data/Hora: ${event.BTCBRL.create_date}</p>
    </div>
    `;
}