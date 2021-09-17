const controller = {
  index: (req, res, next) => {
    res.render('ajuda', {
      title: '| Ajuda',
    });
  },
};

module.exports = controller;