const jwt= require('jsonwebtoken')
const secret_code = process.env.SECRET_CODE || "bebas"

const tokenGenerator = (data) => {
    const {id,username,email,password,photo,status} = data
    return jwt.sign(
        {id,username,email,password,photo,status},
        secret_code
    )
}

const tokenVerified = (dataToken) => {
    return jwt.verify(dataToken,secret_code)
}

module.exports = {
    tokenGenerator, tokenVerified
}