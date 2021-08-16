///let ViagensTematicas = document.getElementsByClassName("ViagensTematicas");

    
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

