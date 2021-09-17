const controller = {
  index: (req, res, next) => {
    res.render('pacotes', {
      title: '| Pacotes',
    });
  },
  show:(req,res,next)=>{
    res.render('pacote',{
      title: '| Pacote'
    })
  }
};

module.exports = controller;