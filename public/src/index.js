

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
    classe;
    img;
    cor;
    constructor(id, nome, classe, img, cor) {
        this.id = id;
        this.nome = nome;
        this.classe = classe;
        this.img = img;
        this.cor = cor;
        
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
    getCor() {
        return this.cor;
    }
    setCor(cor) {
        this.cor = cor;
    }
}
let list = new Temas([new Tema(1, 'Aventura', 'Aventura', 'img/Aventura.jpg', '#69C862aa'), new Tema(2, 'Romântico', 'Romantico', 'img/Romantico.jpg', '#c42e92aa',), new Tema(3, 'Balada', 'Balada', '../assets/img/Balada.jpg', '#373737aa'), new Tema(4, 'Praia', 'Praia', 'img/Praia.jpg', '#34e87daa'), new Tema(5, 'Neve', 'Neve', 'img/Neve.jpg', '#d2d2d2aa')]);


 function exibirIconesDeTemas() {

    let temas = list.getTemas();
    let viagensTematicas = document.getElementsByClassName("Main ViagensTematicas");

    for (let i = 0; i < viagensTematicas.length; i++) {
        for (let tema of temas) {
            viagensTematicas[i].innerHTML +=
                `<li class = "Tema ${tema.getClasse()}">
                    
                    <div class="Container Img" style = " background-image: url(${tema.getImg()});">
                        
                        <a href = "/" style= "
                        background-color: ${tema.getCor()}
                        ">${tema.getNome()}</a>
                        </div>
                    </div>
                <li>`   
        }
    }
}
exibirIconesDeTemas();