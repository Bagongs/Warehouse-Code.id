// 1. membuat server
// require dotenv untuk akses env
require('dotenv').config()

// require beberapa package
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')

// gunakan .json(), .urlencoded(), cors(), dan routes
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

const routes = require('./routes') // 2. membuat routes di foldernya
app.use(routes)

// beri keterangan di terminal saat app berjalan
app.listen(port, () => {
    console.log(`App is listening on ${port}`)
})