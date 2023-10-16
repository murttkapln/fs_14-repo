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

// router.route('/')
//     .get(permissions.isAdmin, topping.list)
//     .post(permissions.isAdmin, topping.create)

// router.route('/:id')
//     .get(permissions.isAdmin, topping.read)
//     .put(permissions.isAdmin, topping.update)
//     .patch(permissions.isAdmin, topping.update)
//     .delete(permissions.isAdmin, topping.delete)


router.use(permissions.isAdmin) //! tümüne sadece admin ulaşabilir

router.route('/')
    .get(permissions.isAdmin, topping.list)
    .post(permissions.isAdmin, topping.create)

router.route('/:id')
    .get(permissions.isAdmin, topping.read)
    .put(permissions.isAdmin, topping.update)
    .patch(permissions.isAdmin, topping.update)
    .delete(permissions.isAdmin, topping.delete)

/* ------------------------------------------------------- */
module.exports = router