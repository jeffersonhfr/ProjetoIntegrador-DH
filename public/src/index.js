


const Temas = {
    temas: [],
    build: function (temas) {
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
        this.construtor(response);
    }

}

class Temas {
    temas= [];
    constructor(lista) {
        this.setTemas(lista);
    }

    postTemas(tema) {
        this.getTemas().push(tema);
    }
    putTemas(tema) {
        let t = this.getTemasById(tema.getId());


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