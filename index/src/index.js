let ViagensTematicas = document.getElementsByClassName("ViagensTematicas");
let viagens = []




function adicionarTema(Tema) {
    for (let i = 0; i<ViagensTematicas.length; i++){
        ViagensTematicas.item(i).innerHTML += `<li><img src= "${Tema.src}"/><li>`
    }
    
}
