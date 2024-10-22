const jwt= require('jsonwebtoken');
const jwtpass= require('../index')


function userjwtmid(req, res, next){
    const btoken= req.headers.Authorization;
    const token= btoken.split(" ")[1];

    const decodedtoken= jwt.verify(token, jwtpass);

    if(decodedtoken.username)
    {
        next();
    }
    else{
        res.status(403).json({
            msg: "you are not authorised"
        })
    }
}

module.exports= userjwtmid