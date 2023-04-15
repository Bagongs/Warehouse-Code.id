const {historyItem} = require('../models')

class HistoryItem{
    static async getAllHistoryItem(req,res){
        try{
            let result = await historyItem.findAll()
            res.status(200).json(result)
        }
        catch(err){
            res.status(500).json(err)
        }

    }
    static async create(req,res){
        try{
            const {itemId, methodRequest, oldValue, newValue} = req.body
            let result = await historyItem.create(
                {itemId, methodRequest, oldValue, newValue}
            )
            res.status(200).json(result)
        }
        catch(err){
            res.status(500).json(err)
        }

    }
    static async delete(req,res){

    }
    static async update(req,res){

    }

}

module.exports = HistoryItem