const multer = require('multer')
const path = require('path')

const storage = (folderName) => {
        return(
        multer.diskStorage({
        destination:(req,file,cb) => {
            cb(null,folderName)
        },
        filename: (req,file,cb) => {
            cb(null, `${Date.now()}${path.extname(file.originalname)}`)
        }
    }))
}

const upload = multer({
        storage: storage("photos"),
        limits: {fileSize:'1000000'},
        fileFilter:(req, file, cb) => {
            const fileTypes = /jpeg|jpg|png|JPG|JPEG|PNG/
            const mimeType = fileTypes.test(file.mimetype)
            const extname = fileTypes.test(path.extname(file.originalname))

            if(mimeType && extname){
                return cb(null, true)
            }
            cb('Give proper file format')
        }
    }).single('photo')

const uploadImage = multer({
    storage: storage("images"),
    limits: {fileSize:'1000000'},
    fileFilter:(req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|JPG|JPEG|PNG/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname){
            return cb(null, true)
        }
        cb('Give proper file format')
    }
}).single('image')

module.exports = {
    upload,uploadImage
}