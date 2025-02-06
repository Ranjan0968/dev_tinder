
const adminAuth =(req,res,next)=>{
    const token = "xyz";
    let isAdminAuthorized = token ==="xyz"
    if(!isAdminAuthorized){
      res.status(401).send("Admin not authorize")
    }
    
    next()
  }

module.exports={
    adminAuth
}