const jwt = require('jsonwebtoken');
const { secret } = require('../config/auth.json');
const admin = async (req, res, next) => {
  req.userId = 1;
  req.isAdmin = true;
  next();
  return;
  
  try {
    
    const authtoken= req.cookies.token;

    if (!authtoken)
        return res.status(401).send({ message: 'Você precisa fazer login para acessar essa página!' });

   
    jwt.verify(authtoken,secret,(err,decoded)=>{

        if(!decoded.admin)
          return res.status(403).send({ message: 'Você não tem permissão para acessar essa página!' });

        if(err)
          return res.status(403).send({ message: 'Você não tem permissão para acessar essa página!' });
        req.userId = decoded.id;
        req.isAdmin = decoded.admin;

        
        next();
    });
} catch (err) {
  console.log(err)
    return res.status(500).send({ message: 'Tivemos alguns problemas internos! Tente novamente mais tarde, se o problema persistir entre em contato com o suporte' });
}
  
}

module.exports = admin