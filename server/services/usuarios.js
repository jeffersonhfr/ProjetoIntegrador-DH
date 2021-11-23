const { User } = require("../database/models");

const usuariosServices = {};

usuariosServices.getAllUser = async () => {
  const users = await User.findAll({});
  return users;
};

usuariosServices.getuUserById = async (id) => {
  const usuario = await Users.findAll({
    where: { id },
  });

  return pacotes;
};

module.exports = usuariosServices;
