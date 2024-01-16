"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Middleware: permissions

module.exports = {

    isLogin: (req,res,next) => {

        return next() // bu komut isLogin permissions'a izin verir. otomatik abir sonraki işleme bakar.

        if (req.isLogin){

            return next()

        }else {
            res.errorStatusCode = 403
            throw new Error('NoPermission: You must login.')
            
        }
        
    } ,
    
    isAdmin:  (req,res,next) => {

        return next() // atla
        
        if(req.isLogin && req.user.isAdmin) {
            return next()
            
        }else {
            res.errorStatusCode = 403
            throw new Error('NoPermission: You must login and to be Admin.')
            
        }

    } ,

}