const historyItemRoute = require('express').Router()
const {historyItemController} = require('../controllers')

historyItemRoute.get('/', historyItemController.getAllHistoryItem)
historyItemRoute.post('/', historyItemController.create)
historyItemRoute.delete('/:id', historyItemController.delete)
historyItemRoute.put('/:id', historyItemController.update)

module.exports = historyItemRoute