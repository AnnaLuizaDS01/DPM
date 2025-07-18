const express = require('express')
const app = express()
const porta = 8080

app.use(express.urlencoded({extended: true}))
app.set("view engine","ejs")

let rotacalculo = app.route('/calculo')

app.get('/', (req,res)=>{
    res.render('akira')
})

rotacalculo.get((req,res)=>{
    res.redirect('/')
})


rotacalculo.post((req,res)=>{
    let dividendo = parseInt(req.body.dividendo)
    let divisor = parseInt(req.body.divisor)

    let total = dividendo / divisor
    
    if( divisor == 0 ){
        res.render('erro')
    } 
    else{
        res.render('gatito',{total})
    }
   

})

app.listen(porta,()=>{
    console.log(`Rodando na porta http://localhost:${porta}`)
})