async function testeApi01() {
    try {
        var pegandoUrl = await fetch('https://randomuser.me/api/');
        var convertendoUrl = await pegandoUrl.json();
        var tela = document.getElementById('teste-api01');
        const nome = convertendoUrl.results[0].name;
        const idade = convertendoUrl.results[0].registered;
        const endereco = convertendoUrl.results[0].location;
        const telefone = convertendoUrl.results[0].cell;
        const email = convertendoUrl.results[0].email;
        const foto = convertendoUrl.results[0].picture;

        tela.innerHTML += captandoDados(nome, idade, endereco, telefone, email, foto)
        console.log(convertendoUrl.results[0]);
        return convertendoUrl;
    } catch (erro) {
        console.log('Esta errado essa porra');
    }
}

// Criando os dados do Usuário
function captandoDados(nome, idade, endereco, telefone, email, foto) {
    return `
    <h1 class="titulo">Teste Api 01</h1>
    <h2 class="titu01">Esse teste tem como finalidade criar um usuário aleatório</h2>

    <h3 class="titulo02">Nome</h3>
    <p class="resultados">${nome.title} ${nome.first} ${nome.last}</p>

    <h3 class="titulo02">Idade</h3>
    <p class="resultados">${idade.age}</p>

    <h3 class="titulo02">Endereço</h3>
    <p class="resultados">Cidade: ${endereco.city}</p>
    <p class="resultados">Estado: ${endereco.state}</p>
    <p class="resultados">Cep: ${endereco.postcode}</p>
    <p class="resultados">Rua: ${endereco.street.number+ ' , ' + endereco.street.name}</p>
    <p class="resultados">Pais: ${endereco.country}</p>

    <h3 class="titulo02">Telefone</h3>
    <p class="resultados">${telefone}</p>

    <h3 class="titulo02">Email</h3>
    <p class="resultados">${email}</p>

    <h3 class="titulo02">Foto</h3>
    <figure>
    <img src="${foto.large}" alt="imagem da pessoa">
    <figcaption>${nome.first}</figcaption>
   </figure>
`
}
console.log(testeApi01()); 