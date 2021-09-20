

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

class Promocoes{
    promocoes= [];
    constructor(promocoes) {
        this.promocoes = promocoes;
    }

    postPromocoes(tema) {
        this.getpromocoes().push(tema);
    }
    putPromocoes(tema) {
 
        this.promocoes.forEach((u, i) => {
            if (u.getId() === tema.getId()) {
                
                   this.promocoes[i].setNome(tema.getNome());
                    this.promocoes[i].setImg(tema.getImg());

                    
                }
            }
        );

        
    }
        
    getPromocoesById(id) {
        for (let tema of this.getpromocoes()) {
            if (tema.getId === id) {
                return tema;
            }
            return false;
        }
    }
    getPromocoes() {
        return this.promocoes;
    }

    setPromocoes(lista){
        this.promocoes = lista;
    }
}


class Pacote{
    id;
    nome;
    img;
    hotel;
    diarias;
    passagemAerea;
    bonus;
    valor;
    constructor(id,nome,img,diarias,hotel,passagemAerea,bonus,valor) {
        this.id = id;
        this.nome = nome;
        this.img = img;
        this.diarias = diarias;
        this.passagemAerea = passagemAerea;
        this.bonus = bonus;
        this.valor = valor;
        this.hotel = hotel;
        
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
    getHotel() {
        return this.hotel;
    }
    setHotel(hotel) {
        this.hotel = hotel;
    }
    getDiarias() {
        return this.diarias;
    }
    setDiarias(diarias){
        this.diarias = diarias;
    }
    getPassagemAerea() {
        return this.passagemAerea;
    }
    setPassagemAerea(passagemAerea) {
        return this.passagemAerea;
    }
    getBonus() {
        return this.bonus;
    }
    setBonus(bonus) {
        this.bonus = bonus;
    }
    getValor() {
        return this.valor;
    }
    setValor(valor) {
        this.valor = valor;
    }
}
class Promo extends Pacote{
    valorPromocional;
    desconto;
    constructor(id,nome,img,diarias,hotel,passagemAerea,bonus,valor,desconto) {
        super(id,nome,img,diarias,hotel,passagemAerea,bonus,valor);
        this.desconto = desconto;
        this.setValorPromocional(desconto);
    }
    getValorPromocional() {
        return this.valorPromocional;
    }
    setValorPromocional(desconto) {
        this.valorPromocional = ((this.valor - this.valor * (desconto / 100)) );
    }
    getDesconto() {
        return this.desconto;
    }
    setDesconto(desconto) {
        this.desconto = desconto;
    }
}
let promo1 = new Promo(1, 'Egito Histórico', 'img/Egito.jpg', 10, true, true, 'Translado e City Tour', 18800, 25);
let promo2 = new Promo(2, 'Egito Histórico', 'img/Egito.jpg', 10, true, true, 'Translado e City Tour', 18800, 25);
let promo3 = new Promo(3, 'Egito Histórico', 'img/Egito.jpg', 10, true, true, 'Translado e City Tour', 18800, 25);
let promo4 = new Promo(4, 'Egito Histórico', 'img/Egito.jpg', 10, true, true, 'Translado e City Tour', 18800, 25);
let promo5 = new Promo(5, 'Egito Histórico', 'img/Egito.jpg', 10, true, true, 'Translado e City Tour', 18800, 25);


let list = new Temas([new Tema(1, 'Aventura', 'Aventura', 'img/Aventura.jpg', '#69C862aa'), new Tema(2, 'Romântico', 'Romantico', 'img/Romantico.jpg', '#c42e92aa',), new Tema(3, 'Balada', 'Balada', '../assets/img/Balada.jpg', '#373737aa'), new Tema(4, 'Praia', 'Praia', 'img/Praia.jpg', '#4e87dbaa'), new Tema(5, 'Neve', 'Neve', 'img/Neve.jpg', '#d2d2d2aa')]);
let list2 = new Promocoes([promo1,promo2,promo3,promo4,promo5]);

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
                        "><h1>${tema.getNome()}</h1></a>
                        </div>
                    </div>
                <li>`     
        }
    }
}

function exibirCardsPromocionais() {
    let promocoes = list2.getPromocoes();
    let viagensPromocionais = document.getElementsByClassName("PacotesPromocionais ExibeIcone");
    for (let i = 0; i < viagensPromocionais.length; i++) {
        viagensPromocionais[i].innerHTML += " ";
    }
    
    for (let i = 0; i < viagensPromocionais.length; i++) {
        for (let promo of promocoes) {
            viagensPromocionais[i].innerHTML +=
                `<li class= "promo">
                     <a href = "/pacotes/1">
                     <img src="${promo.getImg()}"/>
                     <h2 class="Propriedade Nome">${promo.getNome()}</h2>
                     <ul class= "Propriedades">
                        <li class= "Propriedade Hotel">
                        <p><img src="img/calendar.png"/> ${promo.getDiarias()} Diárias</p>
                        </li>
                        <li class= "Propriedade Hotel">
                        <p><img src="img/check.png"/> Hotel</p>
                        </li>
                        <li class= "Propriedade PassagemAerea" >
                        <p><img src="img/check.png"/>Passagem Aerea</p>
                        </li>
                        <li class= "Propriedade Bonus"><p><img src="img/check.png"/>${promo.getBonus()}</p>
                        </li>
                        </li>
                        <li class= "Propriedade ValorInicial preco"><h2> A partir de <span>${(promo.getValor()).toLocaleString('pt-BR',{
                            style: 'currency',
                            currency:'BRL'
                        })}</span></h2>
                        <li class= "Propriedade ValorPromocional preco"><h1>${(promo.getValorPromocional()).toLocaleString('pt-BR',{
                            style: 'currency',
                            currency:'BRL'
                        })}</h1>
                        </li>
                        <h2 class="emAte">em até 10x no cartão de crédito</h2>
                        </ul>
                     </a>
                <li>`
        }
    }
    
}
exibirIconesDeTemas();
exibirCardsPromocionais();