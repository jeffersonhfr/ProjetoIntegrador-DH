

class Temas {
    temas= [];
    constructor(temas) {
        this.temas = temas;
    }

    postTemas(tema) {
        this.getTemas().push(tema);
    }
    putTemas(tema) {
 
        this.temas.forEach((u, i) => {
            if (u.getId() === tema.getId()) {
                
                   this.temas[i].setNome(tema.getNome());
                    this.temas[i].setImg(tema.getImg());

                    
                }
            }
        );

        
    }
        
    getTemasById(id) {
        for (let tema of this.getTemas()) {
            if (tema.getId === id) {
                return tema;
            }
            return false;
        }
    }
    getTemas() {
        return this.temas;
    }

    setTemas(lista){
        this.temas = lista;
    }
}
class Tema {
    id;
    nome;
    img;
    classe;
    constructor(id, nome,img,classe) {
        this.id = id;
        this.nome = nome;
        this.img = img;
        this.classe = classe;
    }
    getId() {
        return this.id;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getClass() {
        return this.classe;
    }
    getClasse(classe) {
        this.classe = classe;
    }
    getImg() {
        return this.img;
    }
    setImg(img) {
        this.img = img;
    }
}
let list = new Temas([new Tema(1, 'Aventura', 'img/Aventura.jpg'), new Tema(2, 'Aventura', '../assets/img/Romantico.jpg'), new Tema(3, 'Balada', '../assets/img/Balada.jpg')]);


function exibirIconesDeTemas() {

    let temas = list.getTemas();
    let viagensTematicas = document.getElementsByClassName("Main ViagensTematicas");

    for (let i = 0; i < viagensTematicas.length; i++) {
        for (let tema of temas) {
            viagensTematicas[i].innerHTML +=
                `<li class = "Tema ${tema.getClasse()}">
                     <a href = "/"><img icone"src="${tema.getImg()}"/></a>
                <li>` 
        }
    }
}