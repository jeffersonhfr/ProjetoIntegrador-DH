
    
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
let ListaPromocinal = {
    Promo: [],
    setPromo: function (Promo) {
        this.Promo = Promo
    },
    getPromo: function () {
        return this.Promo
    },
    postPromo: function (tema) {
        this.getPromo().push(tema)
    },
    putPromo: function (tema, index) {
        this.getPromo()[index] = tema
    },
    deletePromo: function (index) {
        let response = [];
        this.getPromo()[index] = null;
        this.getPromo().map(tema => {
            if (tema != null) {
                response.push(tema)
            }  
        });
        this.setPromo(response);
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
ListaPromocinal.setPromo([
    {
        id: 1,
        nome:"Egito Histórico",
        src: "./index/assets/img/promo-EgitoHistorico-icon.jpg",
        diarias: 10,
        hotel: true,
        passagemAerea: true,
        bonus:"Translado e city tour",
        valor:(18000).toLocaleString('pt-BR',{
            style: 'currency',
            currency:'BRL'
        }),
        valorPromocional:(15800).toLocaleString('pt-BR',{
            style: 'currency',
            currency:'BRL'
        })
    },
    {   nome:"Maldivas paradisiaca",
        src: "./index/assets/img/promo-Maldivas-icon.jpg",
        diarias: 20,
        hotel: true,
        passagemAerea: true,
        bonus:"Aulas de mergulho",
        valor:(21498.80).toLocaleString('pt-BR',{
            style: 'currency',
            currency:'BRL'
        }),
        valorPromocional:(19800).toLocaleString('pt-BR',{
            style: 'currency',
            currency:'BRL'
        })
    },
    {
        id: 3,
        nome: "Las Vegas encantador",
        src: "./index/assets/img/promo-LasVegas-icon.jpg",
        Diarias: 12,
        Hotel: true,
        PassagemAerea: true,
        bonus: "100$ para apostas",
        valor:(16698).toLocaleString('pt-BR',{
            style: 'currency',
            currency:'BRL'
        }),
        valorPromocional:(13300).toLocaleString('pt-BR',{
            style: 'currency',
            currency:'BRL'
        })

    },
    {
        id:4,
        nome:"Gran Canyon",
        Diarias: 7,
        Hotel: true,
        PassagemAerea: true,
        bonus:"Passeio de helicóptero",
        valor: (15000).toLocaleString('pt-BR',{
            style: 'currency',
            currency:'BRL'
        }),
        valorPromocional:(12800).toLocaleString('pt-BR',{
            style: 'currency',
            currency:'BRL'
        })

    }

]);

function exibirIconesDeTemas() {
    let temas = ListaDeTemas.getTemas()
    let viagensTematicas = document.getElementsByClassName("ViagensTematicas ExibeIcone");
    for (let i = 0; i < viagensTematicas.length; i++) {
        for (let tema of temas) {
            viagensTematicas[i].innerHTML +=
                `<li class = "Tema ${tema.class}">
                     <a href = "/"><img class= "${tema.class} icone"src="${tema.src}"/></a>
                <li>`
        }
    }
}
function exibirCardsPromocionais() {
    let promocoes = ListaPromocinal.getPromo();
    let viagensPromocionais = document.getElementsByClassName("PacotesPromocionais ExibeIcone");
    for (let i = 0; i < viagensPromocionais.length; i++) {
        for (let promo of promocoes) {
            viagensPromocionais[i].innerHTML +=
                `<li class= "promo">
                     <a href = "/">
                     <img class = "promo img" src="${promo.src}"/>
                     <h2>${promo.nome}</h2>
                     <ul class= "Propriedades">
                        <li class= "Propriedade Hotel">
                            <p>Hotel</p>
                        </li>
                        <li class= "Propriedade PassagemAerea" >
                        <p>Passagem Aerea</p>
                        </li>
                        <li class= "Propriedade Bonus">${promo.bonus}
                        </li>
                        <li class= "Propriedade ValorPromocional"><h3>${promo.valorPromocional}</h3>
                        </li>
                        <li class= "Propriedade ValorInicial"><h2>${promo.valor}<h2>
                        </li>
                     </ul>
                     </a>
                <li>`
        }
    }
    
}
exibirIconesDeTemas();
exibirCardsPromocionais();



