const {
  getAllCategorias,
  getCategoriasById,
  createCategoria,
  updateCategoria,
  destroyCategoria,
  getPackageByCategory,
} = require('../services/categorias');
const {
  getAllPackages,
  createPacote,
  getPackagesById,
  destroyPacote,
  updatePacote,
  getPackagesByDestiny,
  getPackagesByName,
} = require('../services/pacotes');

const controller = {
  index: async (req, res, next) => {

    try { 

      const categorias = await getAllCategorias();
      if(!categorias)
        return res.status(200).send({message:'Não achamos nenhuma categoria'});
      return res.status(200).send({categorias})
      
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro do servidor' });
    }
  },create: async (req, res, next) => {
  try{


const { nomeCategoria,corCategoria}=req.body

    
    
    
    if(!nomeCategoria)
      return res.status(400).send({message: "Campo Nome da categoria vazio"});
    if(!corCategoria)
      return res.status(400).send({message: "Campo Cor da categoria vazio"});
    if (!req.file) 
      return res.status(400).send({message: "A categoria precisa de uma imagem"});
    var imagemCategoria = `${req.file.filename}`;
  
    const create = await createCategoria({nomeCategoria,corCategoria,imagemCategoria});
    return res.status(200).send(create);
    
    } catch(err){
      return res.status(400).send({message:'Erro do servidor' });
    }
  },
  update: async (req, res, next) => {
    try{
    const { id } = req.params;
    const { nomeCategoria,corCategoria}=req.body;

      var imagemCategoria 
    if(req.file)
      imagemCategoria = `${req.file.filename}`;
    if (!await getCategoriasById(id))
      return res.status(400).send({message: ' Essa categoria não existe' });
    
    let update= undefined;
    if(!imagemCategoria)
      update = await updateCategoria(id, {nomeCategoria,corCategoria});
    else
      update = await updateCategoria(id, {nomeCategoria,corCategoria,imagemCategoria});
     
        res.status(204).send()
      
      }catch(err){
        console.log(err)
        return res.status(500).send({message:'Erro do servidor' });
        }
  },
  destroy: async (req, res, next) => {
    try{
    const { id } = req.params;
    
    if (!await getCategoriasById(id))
      return res.status(400).send({message: ' Essa categoria não existe' });
    
      const destroy = await destroyCategoria(id);
      res.status(204).send()
     }catch{
      res.status(500).send({message:'Erro do servidor' });
    }
  },
};

module.exports = controller;
