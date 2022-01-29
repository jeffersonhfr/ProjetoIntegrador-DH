const controller = {
  logout: (req, res, next) => {
    res.clearCookie(token).status(204).send();
  }
};

module.exports = controller;