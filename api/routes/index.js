// memanggil route
const route = require('express').Router()

// halaman pertama
route.get('/api', (req, res) => {
    res.status(200).json({
        message:'Warehouse Admin Page'
    })
})

// memanggil setiap route (3. membuat route di masing2 file)
const userRoute = require('./user')
const itemRoute = require('./item')
const brandRoute = require('./brand')
const historyItemRoute = require('./historyItem')

// menggunakan route di atas
route.use('/api/users', userRoute)
route.use('/api/items', itemRoute)
route.use('/api/brands', brandRoute)
route.use('/api/history-items', historyItemRoute)

// export route ke server.js
module.exports = route