const { Addtional } = require('../database/models');

const adicionaisServices = {};

adicionaisServices.getAllAddtionals = async () => {
  const adicionais = await Addtional.findAll({
    order: [['nomeAdicional', 'ASC']],
    include: [
      // { association: 'categoria' },
      // { association: 'categorias' },
      { association: 'pacotes' },
    ],
  });

  return adicionais;
};

adicionaisServices.getAddtionalsById = async (id) => {
  const categoria = await Addtional.findOne({
    where: { id },
  });
  return categoria;
};

adicionaisServices.createAddtionals = async (adicional) => {
  const created = await Addtional.create({ ...adicional });
  return created;
};

adicionaisServices.updateAddtionals = async (id, adicional) => {
  const updated = await Addtional.update(
    { ...adicional },
    {
      where: { id },
    },
  );
  return updated;
};

adicionaisServices.destroyAddtionals = async (id) => {
  return await Addtional.destroy({ where: { id } });
};

module.exports = adicionaisServices;
