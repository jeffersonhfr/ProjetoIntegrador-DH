const jwt = require('jsonwebtoken');
const { secret } = require('../config/auth.json');
const login = async (req, res, next) => {
  
  
  try {
    
    const authtoken= req.cookies.token;

    if (!authtoken)
        return res.status(401).send({ message: 'Você precisa fazer login para acessar essa página!' });

   
    jwt.verify(authtoken,secret,(err,decoded)=>{
        req.userId = decoded.id;
        req.isAdmin = decoded.admin;
        next();
    });
} catch (err) {
  console.log(err)
    return res.status(500).send({ message: 'Tivemos alguns problemas internos! Tente novamente mais tarde, se o problema persistir entre em contato com o suporte' });
}
};

module.exports = login;
