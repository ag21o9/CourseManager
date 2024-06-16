const issign = (req,res,next)=>{
    const uid = req.cookies['uid'];
    if(uid){
        req.uid = uid;
        next(); 
    }
    else{
        res.send("Login First");
    }
}

module.exports = issign;