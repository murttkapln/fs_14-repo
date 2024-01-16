"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/topping:

const topping = require('../controllers/topping')
const permissions = require('../middlewares/permissions')

// URL: /toppings

// Malzeme listesi sadece Admin tarafından erişilebilmelidir.
// Admin olmazsa olmayan bir malzeme


router.use(permissions.isAdmin)

router.route('/')
    .get(topping.list)
    .post(topping.create)

router.route('/:id')
    .get(topping.read)
    .put(topping.update)
    .patch(topping.update)
    .delete(topping.delete)

    
// router.route('/')
//     .get(permissions.isAdmin,topping.list)
//     .post(permissions.isAdmin,topping.create)

// router.route('/:id')
//     .get(permissions.isAdmin,topping.read)
//     .put(permissions.isAdmin,topping.update)
//     .patch(permissions.isAdmin,topping.update)
//     .delete(permissions.isAdmin,topping.delete)

/* ------------------------------------------------------- */
module.exports = router