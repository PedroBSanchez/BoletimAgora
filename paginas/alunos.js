function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function chamaGet(){
    var url = "http://localhost:3000/alunos/";
    var idAluno = document.getElementById("alunoId").value;
    url = url + idAluno;
    
    var dados = fazGet(url);
    var dadosObjeto = JSON.parse(dados);
    return dadosObjeto;
}



function inserirDadosNoHTML(){

    var data = chamaGet();

    var nome = data.escolas[0].nome;
    var id = data.escolas[0].id_aluno;

    criaCard(nome, id);
    
}


function teste() {
    window.location.replace("file:///C:/Users/Pedro/Documents/BoletimAgora/paginas/cadastrarAluno.html");
    console.log("123");
}

function criaCard(nome, numMatricula) {

    let place = document.getElementById('alunosCadastrados');

    //Cria cards de cada aluno

    //Coluna
    let divCol = document.createElement('div');
    divCol.classList.add('col-sm-4');

    //Div do card
    let divCard = document.createElement('div');
    divCard.classList.add('card');
    divCard.classList.add('text-white');
    divCard.classList.add('bg-primary');
    divCard.classList.add('mb-3');
    divCard.classList.add('item-align-left');
    divCard.setAttribute('style', 'max-width: 18rem');

    //Div do header do card
    let divCardHeader = document.createElement('div');
    divCardHeader.classList.add('card-header');
    let h5Card = document.createElement('h5');
    let h5CardNome = document.createTextNode(nome);
    h5Card.appendChild(h5CardNome);
    divCardHeader.appendChild(h5Card);

    //Div do body do card
    let divCardBody = document.createElement('div');
    divCardBody.classList.add('card-body');

    //h6 do body do card
    let h6CardBody = document.createElement('h6');
    h6CardBody.classList.add('card-title');
    let h6CardText = document.createTextNode('Número de Matrícula: ');
    h6CardBody.appendChild(h6CardText);
    //p do body do card
    let pCardBody = document.createElement('p');
    pCardBody.classList.add('card-text');
    let pCardText = document.createTextNode(numMatricula);
    pCardBody.appendChild(pCardText);

    //botão que está no body do card e possui div própria
    let divButtonCardBody = document.createElement('div');
    divButtonCardBody.classList.add('text-center');
    let buttoncardbody = document.createElement('button');
    buttoncardbody.classList.add('btn');
    buttoncardbody.classList.add('btn-outline-light');
    buttoncardbody.classList.add('btn-sm');
    buttoncardbody.setAttribute('type', 'button');
    buttoncardbody.setAttribute('id', numMatricula);
    buttoncardbody.setAttribute('onClick', 'teste(this.id)');
    let textButton = document.createTextNode('Visualizar');
    buttoncardbody.appendChild(textButton);

    //Adiciona botão em sua div
    divButtonCardBody.appendChild(buttoncardbody);

    //Adiciona os elementos no card-body
    divCardBody.appendChild(h6CardBody);
    divCardBody.appendChild(pCardBody);
    divCardBody.appendChild(divButtonCardBody);

    //Adiciona a coluna, card, card-header, card-body
    place.appendChild(divCol);
    divCol.appendChild(divCard);
    divCard.appendChild(divCardHeader);
    divCard.appendChild(divCardBody);
}