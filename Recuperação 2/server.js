const express = require('express')
const app = express()
const parser =  require('body-parser')


app.use(parser.urlencoded({extended: false}))
app.use(parser.json())
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('teça')
})

app.get('/juju', (req, res) => {
    var numeroli = (req.query.numerola-0)*2
    var nomenu =  req.query.nomena

    var fraserile = "Aoba, "+nomenu+". O dobro do teu número é "+numeroli


    res.render('daralan', {fraserile})
})



app.listen(8080)