async function testeApi01() {
  try {
    var pegandoUrl = await fetch("https://randomuser.me/api/");
    var convertendoUrl = await pegandoUrl.json();
    var tela = document.getElementById("teste-api01");

    var nome = convertendoUrl.results[0].name;
    var idade = convertendoUrl.results[0].dob;
    var endereco = convertendoUrl.results[0].location;
    var telefone = convertendoUrl.results[0].cell;
    var email = convertendoUrl.results[0].email;
    var foto = convertendoUrl.results[0].picture;
    var sexo = convertendoUrl.results[0].gender;
    var login = convertendoUrl.results[0].login;

    tela.innerHTML += captandoDados(
      nome,
      idade,
      endereco,
      telefone,
      email,
      foto,
      sexo,
      login
    );
    const novoUser = document.getElementById("novoUser");
    novoUser.addEventListener("click", () => {
      location.reload();
    });
    return convertendoUrl;
  } catch (erro) {
    console.log("Esta errado essa porra");
  }
}

// Criando os dados do Usuário
function captandoDados(
  nome,
  idade,
  endereco,
  telefone,
  email,
  foto,
  sexo,
  login
) {
  return `
    <div class="curriculo">
        <figure>
            <img src="${foto.large}" alt="imagem da pessoa">
            <figcaption>${nome.first}</figcaption>
        </figure>

        <div class="curriculo02">
            <h3 class="titulo02">Nome</h3>
            <p class="resultados">${nome.title} ${nome.first} ${nome.last}</p>

            <h3 class="titulo02">Idade</h3>
            <p class="resultados">${idade.age}</p>

            <h3 class="titulo02">Telefone</h3>
            <p class="resultados">${telefone}</p>

            <h3 class="titulo02">Email</h3>
            <p class="resultados">${email}</p>
        </div>
        <div class="curriculo01"> 
          <h3 class="titulo02">Endereço</h3>
            <p class="resultados"><span>Cidade: </span>${endereco.city}</p>
            <p class="resultados"><span>Estado: </span>${endereco.state}</p>
            <p class="resultados"><span>Cep: </span>${endereco.postcode}</p>
            <p class="resultados"><span>Rua: </span>${
              endereco.street.number + " , " + endereco.street.name
            }</p>
            <p class="resultados"><span>Pais: </span>${endereco.country}</p>
        </div>
        <div> 
          <h3 class="titulo02">Sexo</h3>
            <p class="resultados">${sexo}</p>
          <h3 class="titulo02">Login</h3>
            <p class="resultados">Username: ${login.username}</p>
            <p class="resultados">Senha: ${login.password}</p>
        </div>
    </div>
    <div class="btn-position">
      <button class="btn" id="novoUser">Novo Usuário</button>
    </div>
`;
}

console.log(testeApi01());
