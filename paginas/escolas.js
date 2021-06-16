
function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function chamaGet() {
    // Monta url da requisição
    var idEscola = document.getElementById("idEscola").value;
    var url = "http://localhost:3000/escolas/";
    url = url + idEscola;

    // Transforma string recebida pela API em objeto
    var dados = fazGet(url);
    var dadosObjeto = JSON.parse(dados);
    return dadosObjeto;
}

function inserirDadosNoHTML() {
    var data = chamaGet();
    console.log(data);

    //Atribuir os valores do objetos JSON para variáveis
    var nome = data.escolas[0].nome;
    var identificador = data.escolas[0].id_escola;
    var numAlunos = data.escolas[0].num_alunos;
    var cep = data.escolas[0].cep;
    var cidade = data.escolas[0].cidade;
    var bairro = data.escolas[0].bairro;
    var logradouro = data.escolas[0].logradouro;
    var numero = data.escolas[0].numero;

    
    // Inserir no html (campos definidos) os valores das variáveis
    alteraPlaceholderCampo("escolaNome", nome);
    alteraPlaceholderCampo("escolaIdentificador", identificador);
    alteraPlaceholderCampo("escolaNumAlunos", numAlunos);
    alteraPlaceholderCampo("escolaCep", cep);
    alteraPlaceholderCampo("escolaCidade", cidade);
    alteraPlaceholderCampo("escolaBairro", bairro);
    alteraPlaceholderCampo("escolaLogradouro", logradouro);
    alteraPlaceholderCampo("escolaNumero", numero);
    
    

    

}


function alteraPlaceholderCampo(id, placeholderValor) {
    var documento;
    documento = document.getElementById(id);
    documento.setAttribute('placeholder', placeholderValor);
    
}

