const { getUserById,updateUser } = require("../services/usuarios");

const controller = {
  index: async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await getUserById(id);
      
      if(req.userId!=id){
        console.log(req.isAdmin)
        if(!req.isAdmin){
          return res.status(403).send({ message: 'Você não tem permissão para acessar essa página!' });}
      }
      

      if(!user)
        return res.status(404).send({message: "Esse usuário não existe"});

      return res.status(200).json({user});
      
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erro do servidor"});
    }
  },
  edit: async (req, res, next) => {
    try {
      const { id } = req.params;
       if(req.userId!=id){
        console.log(req.isAdmin)
        if(!req.isAdmin){
          return res.status(403).send({ message: 'Você não tem permissão para acessar essa página!' });}
      }
      const user = await getUserById(id);
      if(!user){
        return res.status(404).send({message: "Esse usuário não existe"})
      }
      const update = await updateUser(id,req.body);
      return res.status(204).send();
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erro do servidor" });
    }
  }
};

module.exports = controller;
