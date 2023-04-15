const {brand} = require('../models')

class Brand{
    static async getAllBrand(req,res){
        try{
            let result = await brand.findAll()
            res.status(200).json(result)

        }
        catch(err){
            res.status(500).json(err)
        }

    }
    static async create(req,res){
        try{
            const {name} = req.body
            let result = await brand.create({name})
            res.status(200).json(result)
        }
        catch(err){
            res.status(500).json(err)
        }
    }
    static async delete(req,res){
        try{
            const id = Number(req.params.id)
            let result = await brand.destroy(
                {where:{id}}
            )
            result === 1?
                res.status(200).json({
                    message:`Brand id ${id} has deleted successfully`
                }):
                res.status(404).json({
                    message:`Brand id ${id} is not found`
                })
            res.status(200).json(result)
        }
        catch(err){
            res.status(500).json(err)
        }
        
    }
    static async update(req,res){
        try{
            const id = Number(req.params.id)
            const {name} = req.body
            let result = await brand.update(
                {name},
                {where:{id}}
            )
            result[0] === 1?
                res.status(200).json({
                    message:`Update brand id ${id} data is successfull`
                }):
                res.status(404).json({
                    message:`Brand id ${id} is not found`
                })
            res.status(200).json(result)           
        }
        catch(err){
            res.status(500).json(err)
        }
    }

}

module.exports = Brand