// const bcrypt = require('bcrypt')
// const salt_round = process.env.SALT_ROUND || 5

// const encryptPwd = (data) => {
//     return bcrypt.hashSync(data, salt_round)
// }

// const decryptPwd = (data, hashData) => {
//     return bcrypt.compareSync(data, hashData)
// }

// module.exports = {
//     encryptPwd, decryptPwd
// }

const bcrypt = require('bcrypt')
const saltRound = Number(process.env.SALT_ROUND) || 5

const encryptPwd = (data) => {
    return bcrypt.hashSync(data, saltRound)
}

const decryptPwd = (data, hashPwd) => {
    // return bcrypt.compare(data, hashPwd) // butuh await saat digunakan
    return bcrypt.compareSync(data, hashPwd) // tidak butuh await saat digunakan
}

module.exports = {
    encryptPwd,
    decryptPwd
}