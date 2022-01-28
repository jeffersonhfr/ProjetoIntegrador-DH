const { createUser } = require('../services/usuarios');
const bcrypt = require('bcrypt');
const controller = {
  add: async (req, res, next) => {
    try {

      const user = req.body;

      if(!user.nome)
        return res.status(400).send({message:"Campo nome vazio"})
      if(!user.email)
        return res.status(400).send({message:"Campo e-mail vazio"})
      if(!user.senha)
        return res.status(400).send({message:"Campo senha vazio"})



      user.senha = bcrypt.hashSync(req.body.senha, 10);
      user.criadoEm = new Date();
      user.modificadoEm = new Date();
      user.admin = false;
      user.avatar = '/assets/img/Aventura.jpg';
    

      const create = await createUser(user);

      create.senha=undefined;
      return res.status(200).json({ create});
      
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro do servidor' });
    }
  },
};

module.exports = controller;
