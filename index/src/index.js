
    
let ListaDeTemas = {
    temas: [],
    setTemas: function (temas) {
        this.temas = temas
    },
    getTemas: function () {
        return this.temas
    },
    postTemas: function (tema) {
        this.getTemas().push(tema)
    },
    putTemas: function (tema, index) {
        this.getTemas()[index] = tema
    },
    deleteTemas: function (index) {
        let response = [];
        this.getTemas()[index] = null;
        this.getTemas().map(tema => {
            if (tema != null) {
                response.push(tema)
            }  
        });
        this.setTemas(response);
    }
    
}

ListaDeTemas.setTemas([
    {
        nome: "Aventura",
        class: "Aventura",
        src: "./index/assets/img/tema-aventura-icon.jpg"
    },
    
    {
        nome: "Romântico",
        class: "Romantico",
        src:"./index/assets/img/tema-romantico-icon.jpg"
    },
    {
        nome: "Balada",
        class: "Balada",
        src:"./index/assets/img/tema-balada-icon.jpg"
    },
    {
        nome: "Praia",
        class: "Praia",
        src:"./index/assets/img/tema-praia-icon.jpg"
    }, 
    {
        nome: "Neve",
        class: "Neve",
        src:"./index/assets/img/tema-neve-icon.jpg"
    }

]);

function exibirIconesDeTemas() {
    let temas = ListaDeTemas.getTemas()
    let viagensTematicas = document.getElementsByClassName("ViagensTematicas ExibeIcone");
    for (let i = 0; i < viagensTematicas.length; i++) {
        for (tema of temas) {
            viagensTematicas[i].innerHTML +=
                `<li class = "Tema ${tema.class}">
                     <a href = "/"><img class= "${tema.class} icone"src="${tema.src}"/></a>
                <li>`
        }
    }
}

exibirIconesDeTemas();


