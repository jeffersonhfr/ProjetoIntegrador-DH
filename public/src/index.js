

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
            console.log(tema.getId());
            if (u.getId() === tema.getId()) {
                
                   this.temas[i].setNome(tema.getNome());
                    this.temas[i].setImg(tema.getImg());

                    console.log(tema.getNome());
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
    
    constructor(id, nome,img) {
        this.id = id;
        this.nome = nome;
        this.img = img;
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
    getImg() {
        return this.img;
    }
    setImg(img) {
        this.img = img;
    }
}
let list = new Temas([new Tema(1, 'Aventura', '../assets/img/Aventura.jpg'), new Tema(2, 'Aventura', '../assets/img/Romantico.jpg'), new Tema(3, 'Balada', '../assets/img/Balada.jpg')]);


