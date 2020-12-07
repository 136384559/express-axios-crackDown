let express = require('express')
let axios = require('axios')


let app = express()


app.get('/', (req,res) => {
    res.send('hello world')
})


app.listen(4040, (req,res) =>{
    console.log('server start:','http://localhost:4040')
})