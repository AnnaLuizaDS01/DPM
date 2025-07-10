const express = require('express')
const bananAnna = express()
const parser = require("body-parser")

bananAnna.use(parser.urlencoded({extended: false}))
bananAnna.use(parser.json())


bananAnna.get('/', (req,res)=>{
    res.render('akira')
})

bananAnna.get('/calculo',(req,res)=>{
    var frequencia = req.query.freq-0
    var trabalho = req.query.trabai-0
    var resulenergia
    const hplanck = 6.62*10**-34

    resulenergia = hplanck*frequencia-trabalho

    res.render('gatito',{resulenergia})

})