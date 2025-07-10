const express = require('express')
const app = express()
const parser = require('body-parser')


app.use(parser.urlencoded({extended: false}))
app.use(parser.json())
app.set('view engine','ejs')

app.get('/', (req, res) => {
    res.render('index')

})
app.get('/sub', (req, res) => {
    var n1 = (req.query.n1-0)
    var n2 = (req.query.n2-0)

    var total = n1-n2
    res.render('sub',{total})

})
app.get('/soma', (req, res) => {
    var n1 = (req.query.n1-0)
    var n2 = (req.query.n2-0)

    var total = n1+n2
    res.render('soma',{total})
    
})
app.get('/mult', (req, res) => {
    var n1 = (req.query.n1-0)
    var n2 = (req.query.n2-0)

    var total = n1*n2
    res.render('mult',{total})

})
app.get('/div', (req, res) => {
    var n1 = (req.query.n1-0)
    var n2 = (req.query.n2-0)

    var total = n1/n2
    res.render('div',{total})

})


app.listen(8080)
console.log("servidor rodando em: http://localhost:8080/?")
