"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Middleware: permissions

module.exports = {

    isLogin: (req,res,next) => {

        return next() // bu komut permissions'ı yok sayar. Otomatik olarak herşeye izin verir. Test yapmak amaçlı.

        if (req.isLogin){

            return next()

        }else {
            res.errorStatusCode = 403
            throw new Error('NoPermission: You must login.')
            
        }
        
    } ,
    
    isAdmin:  (req,res,next) => {
        
        if(req.isLogin && req.user.isAdmin) {
            return next()
            
        }else {
            res.errorStatusCode = 403
            throw new Error('NoPermission: You must login and to be Admin.')
            
        }

    } ,

}