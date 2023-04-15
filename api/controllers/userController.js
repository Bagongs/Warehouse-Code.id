const {user} = require('../models')
const {tokenGenerator} = require('../helpers/jsonwebtoken')
const {decryptPwd} = require('../helpers/bcrypt')
// const fs = require('fs').promises

class UserController{
    static async getAllUser(req,res){
        try{
            let result = await user.findAll()
            res.status(200).json(result)
        }
        catch(err){
            res.status(500).json(err)
        }
    }
    static async register(req,res){
        try{
            const {username, email, password, photo, status} = req.body
            // console.log(req.file)
            if(req.file === undefined){
                let result = await user.create({
                    username, email, password, status
                })
                res.status(200).json(result)
            }
            else{
                const folderName = 'photos'
                const photoURL = `${req.protocol}://${req.get('host')}/api/users/${folderName}/${req.file.filename}`
                let result = await user.create({
                    username, email, password, photo:photoURL, status
                })
                res.status(200).json(result)
            }
        }
        catch(err){
            res.status(500).json(err)
        }
    }
    static async login(req,res){
        try{
            const {email,password} = req.body
            const result = await user.findOne({
                where:{email}
            })
            if(result){
                const isValidPwd = decryptPwd(password, result.password)
                if(isValidPwd){
                    const tokenData = tokenGenerator(result)
                    res.status(200).json({tokenData})
                }
                else{
                    res.json(403).json({
                        message:'Password is invalid'
                    })
                }
            }
            else{
                res.status(404).json({
                    message:'Email is not found'
                })
            }
        }
        catch(err){
            res.status(500).json(err)
        }
        
    }
    static async delete(req,res){
        try{
            const id = Number(req.params.id)
            const result = await user.destroy({
                where:{id}
            })

            result === 1?
                res.status(200).json({
                    message:`User id ${id} has deleted successfully`
                }):
                res.status(404).json({
                    message:`User id ${id} is not found`
                })
        }
        catch(err){
            res.status(500).json(err)
        }
    }
    static async update(req,res){
        try{
            const id = Number(req.params.id)
            const {username, email, password, photo, status} = req.body
            const result = await user.update(
                {username, email, password, photo, status},
                {where:{id}}
            )
            // console.log(result[0])
            result[0] === 1?
                res.status(200).json({
                    message:`Update id ${id} data is successfull`
                }):
                res.status(404).json({
                    message:`User id ${id} is not found`
                })
        }
        catch(err){
            res.status(500).json(err)
        }
    }
    static async getUserById(req,res){
        try{
            const id = Number(req.params.id)
            const result = await user.findOne({
                where:{id}
            })
            res.status(200).json(result)
        }
        catch(err){
            res.status(500).json(err)
        }
    }
    //belum berhasil
    // static async getPhotoProfile(req,res){
    //     try{
    //         const filename = req.params.filename;
    //         const directoryPath = path.resolve(__dirname, '../photos')
    //         const filePath = path.join(directoryPath, filename)
    //         res.status(200).sendFile(filePath)  
    //     }
    //     catch(err){
    //         res.status(500).json(err)
    //     }
    // }
}

module.exports = UserController