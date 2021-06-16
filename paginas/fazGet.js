function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function main(){
    data = fazGet("http://localhost:3000/escolas/1")
    console.log(data);
}

main();