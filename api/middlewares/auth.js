const {tokenVerified} = require('../helpers/jsonwebtoken')

const authentication = (req, res, next) => {
    console.log('middleware of auth is activate')
    const access_token = req.headers.access_token

    if(access_token){
        console.log('token is gotten')
        try{
            const userFromtoken = tokenVerified(access_token)
            req.userData = userFromtoken
            next() //agar bisa ke controller atau tahap selanjutnya
        }
        catch{
            res.status(500).json({
                message:'cannot find data from that token'
            })
        }
    }
    else{
        res.status(404).json({
            message:'access_token is not found'
        })
    }
}

module.exports = {
    authentication
}