const {
  getAllAddtionals,
  getAddtionalsById,
  createAddtionals,
  updateAddtionals,
  destroyAddtionals,
} = require('../services/adicionais');

const controller = {
  index: async (req, res, next) => {
    try {
      const adicionais = await getAllAddtionals();
      if(!adicionais)
        return res.status(404).send({message:'Não encontramos adicionais!'})
      return res.status(200).send(adicionais);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: 'Erro do servidor', error });
    }
  },
  create: async (req, res, next) => {
  try{
    const create = await createAddtionals(req.body);

    if (create) 
      res.status(200).send(create)
    } catch (err){
      res.status(500).send('Erro ao criar adicional');
    }
  },
  update: async (req, res, next) => {
    try{
    const { id } = req.params;
    if (await getAddtionalsById(id) == null)
      return res.status(404).send("essse adicional não existe!");
     await updateAddtionals(id, req.body);
    
    return res.status(204).send()
    }catch(erro){
      return res.status(500).send('Erro do servidor');
    }
  },
  destroy: async (req, res, next) => {

    try{
      const { id } = req.params;
      const destroy = await destroyAddtionals(id);
      if (await getAddtionalsById(id) == null)
        return res.status(404).send("essse adicional não existe!");
    
      return res.status(204).send();

    }catch(err){
      res.status(500).send({erro:'Ops... deu ruim...'});
    }
    }
};

module.exports = controller;
