const itemRouter = require('express').Router()
const {itemController} = require('../controllers')
const {uploadImage} = require('../middlewares/multer')
const path = require('path')
const {authentication} = require('../middlewares/auth')

itemRouter.get('/', itemController.getAllItem)
itemRouter.post('/', authentication, uploadImage,itemController.create)
itemRouter.put('/attendant/delete/:id', itemController.deleteRequest)
itemRouter.put('/attendant/update/:id', itemController.updateRequest)
itemRouter.delete('/:id', itemController.delete)
itemRouter.put('/:id', itemController.update)
itemRouter.get('/images/:filename', async (req,res)=>{
    try{
        console.log("check")
        const filename = req.params.filename;
        console.log(filename)
        const directoryPath = path.resolve(__dirname, '../images')
        console.log(directoryPath)
        const filePath = path.join(directoryPath, filename)
        res.status(200).sendFile(filePath)  
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports = itemRouter

/*
attendant untuk user status attendant: hanya bisa request delete dan update
selain attendant (owner, manager): bisa delete langsung
*/