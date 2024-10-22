const { Admin } = require("../db");

async function adminsignupmid(req, res, next){
    const uname= req.body.username;
    const existingAdmin= await Admin.findOne({
        username: uname
    });
    if(existingAdmin)
        {
            res.status(403).json({
                msg: "Admin with same username already exist, please choose another username"
            })        
        }
        else{
            next();
        }

}


async function  adminmid(req, res, next){
    const uname= req.headers.username;
    const pword= req.headers.password;
    const existingAdmin= await Admin.findOne({
        username: uname,
        password:pword
    });
    if(existingAdmin)
    {
        next();
    }
    else{
        res.status(403).json({
            msg: "Admin doesnt exist"
        })
    }
}

module.exports= {adminmid, adminsignupmid};

// var queryvars= window.location.search.substring(1).split("&");

// for(i=0; i<queryvars.length;i++)
// {
//     var ipvar= queryvars[i].split("=");
// }
// var value= decodeURIComponent(ipvar[1]);
// var cssurl= value;
// fileref.href=cssurl
