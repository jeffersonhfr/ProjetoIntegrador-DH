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
usuariosServices.updateUser = async (id, user) => {
  const update = await User.update(
    { ...user },
    {
      where: { id },
    }
  );
  return update;
};

module.exports = usuariosServices;
