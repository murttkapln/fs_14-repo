"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Middleware: permissions

module.exports = {

    isLogin: (req, res, next) => {
        if(req.isLogin){
          return  next()
        }else{
            res.errorStatusCode = 401
            throw new Error('No Permission: ')
        }
        
    },
    isAdmin: (req, res, next) => {
        
    },
    isLogin: (req, res, next) => {
        
    },

      
}