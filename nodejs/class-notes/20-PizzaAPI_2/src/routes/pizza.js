"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/pizza:

const permissions = require('../middlewares/permissions')
const pizza = require('../controllers/pizza')

// URL: /pizzas

router.route('/')
    .get(pizza.list)
    .post(pizza.create)

router.route('/:id')
    .get(pizza.read)
    .put(pizza.update)
    .patch(pizza.update)
    .delete(pizza.delete)

    

router.put('/:id/pushToppings', permissions.isAdmin, pizza.pushToppings)
router.put('/:id/pullToppings', permissions.isAdmin, pizza.pullToppings)
/* ------------------------------------------------------- */
module.exports = router