function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function chamaGet(idAluno) {
    var url = "http://localhost:3000/notas/";
    url = url + idAluno;
    var dados = fazGet(url);
    var dadosObjeto = JSON.parse(dados);
    return dadosObjeto;
}


function realizaQuery() {
    var idAluno = queryString("idAluno");
    var dados = chamaGet(idAluno);

    //Inserindo informações do aluno na tela
    var labelNome = document.getElementById("alunoId");
    var labelNomeValue = document.createTextNode(dados.escolas[0].nome);
    labelNome.appendChild(labelNomeValue);
    var labelNumMatricula = document.getElementById("alunoNumMatricula");
    var labelNumMatriculaValue = document.createTextNode(dados.escolas[0].id_aluno);
    labelNumMatricula.appendChild(labelNumMatriculaValue);

    


    //Inserindo notas do aluno na tabela
    var tabela = document.getElementById("tabelaNotas");
    
    dados.escolas.forEach(element => {
        
        var linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}


function criaLinha(nota) {
    linha = document.createElement("tr");
    tdMateria = document.createElement("td");
    tdBim1 = document.createElement("td");
    tdBim2 = document.createElement("td");
    tdBim3 = document.createElement("td");
    tdBim4 = document.createElement("td");
    tdMateria.innerHTML = nota.nome_materia;
    tdBim1.innerHTML = nota.bim1;
    tdBim2.innerHTML = nota.bim2;
    tdBim3.innerHTML = nota.bim3;
    tdBim4.innerHTML = nota.bim4;
    linha.appendChild(tdMateria);
    linha.appendChild(tdBim1);
    linha.appendChild(tdBim2);
    linha.appendChild(tdBim3);
    linha.appendChild(tdBim4);

    return linha;
}




function queryString(parameter) {  
    var loc = location.search.substring(1, location.search.length);   
    var param_value = false;   
    var params = loc.split("&");   
    for (i=0; i<params.length;i++) {   
        param_name = params[i].substring(0,params[i].indexOf('='));   
        if (param_name == parameter) {                                          
            param_value = params[i].substring(params[i].indexOf('=')+1)   
        }   
    }   
    if (param_value) {   
        return param_value;   
    }   
    else {   
        return undefined;   
    }   
}

realizaQuery();
