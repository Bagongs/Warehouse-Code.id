const brandRoute = require('express').Router()
const {brandController} = require('../controllers')

brandRoute.get('/', brandController.getAllBrand)
brandRoute.post('/', brandController.create)
brandRoute.delete('/:id', brandController.delete)
brandRoute.put('/:id', brandController.update)

module.exports = brandRoute