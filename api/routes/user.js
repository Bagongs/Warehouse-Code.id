const userRoute = require('express').Router()
const {userController} = require('../controllers')
const {upload} = require('../middlewares/multer')
const path = require('path')
// const fs = require('fs').promises

userRoute.get('/', userController.getAllUser)
userRoute.post('/login',userController.login)
userRoute.post('/register',upload,userController.register)
userRoute.delete('/:id', userController.delete)
userRoute.put('/:id', userController.update)
userRoute.get('/account/:id', userController.getUserById)
userRoute.get('/photos/:filename', async (req,res)=>{
    try{
        const filename = req.params.filename;
        const directoryPath = path.resolve(__dirname, '../photos')
        console.log(directoryPath)
        const filePath = path.join(directoryPath, filename)
        res.status(200).sendFile(filePath)  
    }
    catch(err){
        res.status(500).json(err)
    }
})
// belum berhasil
// userRoute.get('/photos/:filename',userController.getPhotoProfile)

module.exports = userRoute