const redirect = async (req, res, next) => {
  let { origem } = req.body;
  console.log(origem);
  if (origem) {
    return res.redirect(`${origem}`);
  }

  next();

  return;
};

module.exports = redirect;
