const { User } = require("../database/models");

const usuariosServices = {};

usuariosServices.getAllUser = async () => {
  const users = await User.findAll({});
  return users;
};

usuariosServices.getUserById = async (id) => {
  const users = await User.findAll({
    where: { id },
  });

  return users;
};

module.exports = usuariosServices;
