const {item} = require('../models')

class Item{
    static async getAllItem(req,res){
        try{
            let result = await item.findAll()
            res.status(200).json(result)
        }
        catch(err){
            res.status(500).json(err)
        }

    }
    static async create(req,res){
        try{
            const {name, image, receiving, category, userId, brandId, editRequest} = req.body
            console.log(req.body)
            if(req.file === undefined){
                let result = await item.create(
                    {name, receiving, category, userId, brandId, editRequest}
                )
                res.status(200).json(result)                
            }
            else{
                const folderName = "images"
                const imageURL = `${req.protocol}://${req.get('host')}/api/items/${folderName}/${req.file.filename}`
                let result = await item.create(
                    {name, image:imageURL, receiving, category, userId, brandId, editRequest}
                )
                res.status(200).json(result)
            }
        }
        catch(err){
            res.status(500).json(err)
        }

    }
    static async deleteRequest(req,res){
        try{
            const id = Number(req.params.id)
            let requestComment = `Request delete ${id}`
            let result = await item.update(
                {editRequest:requestComment},
                {where:{id}}
            )
            res.status(200).json(result)
        }
        catch(err){
            res.status(500).json(err)
        }
    }
    static async updateRequest(req,res){
        try{
            const id = Number(req.params.id)
            let requestComment = `Request update ${id}`
            let result = await item.update(
                {editRequest:requestComment},
                {where:{id}}
            )
            res.status(200).json(result)
        }
        catch(err){
            res.status(500).json(err)
        }
    }
    static async delete(req,res){
        try{
            const id = Number(req.params.id)
            const result = await item.destroy({
                where:{id}
            })

            result === 1?
                res.status(200).json({
                    message:`Item id ${id} has deleted successfully`
                }):
                res.status(404).json({
                    message:`Item id ${id} is not found`
                })

        }
        catch(err){
            res.status(500).json(err)
        }
    }
    static async update(req,res){
        try{
            const id = Number(req.params.id)
            const {name, image, receiving, category, userId, brandId, editRequest} = req.body
            const result = await item.update(
                {name, image, receiving, category, userId, brandId, editRequest},
                {where:{id}}
            )
            // console.log(result[0])
            result[0] === 1?
                res.status(200).json({
                    message:`Update Item id ${id} data is successfull`
                }):
                res.status(404).json({
                    message:`Item id ${id} is not found`
                })
        }
        catch(err){
            res.status(500).json(err)
        }

    }
}

module.exports = Item