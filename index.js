const express = require('express')
const app = new express()

const ejsLayout = require('express-ejs-layouts')

//MIDDLEWARE
app.set('view engine', 'ejs')
app.use(ejsLayout)

//home route
app.get('/',(req,res)=>{
    // res.send("home")
    res.render('index.ejs')
})

//water route
app.get('/water',(req,res)=>{
    // res.send("water")
    let waterTraits = ['private','mysterious','psychic','charming','emotional','sensitive']
    res.render('water.ejs',{traits: waterTraits})
})

//air route
app.get('/air',(req,res)=>{
    // res.send("air")
    let airTraits = ['movement','creativity','action','adventure','exciting','easily provoked']
    res.render('air.ejs',{traits: airTraits})
})

//fire route
app.get('/fire',(req,res)=>{
    // res.send("fire")
    let fireTraits = ['passionate','strong emotions','tempermental','energetic','accomplished','interesting']
    res.render('fire.ejs',{traits: fireTraits})
})

//earth route
app.get('/earth',(req,res)=>{
    // res.send("earth")
    let earthTraits = ['grounded','helpful','practical','realistic','materialistic','dependable']
    res.render('earth.ejs',{traits: earthTraits})
})

app.listen(8000, ()=>{
    console.log("now vibing out to 8000")
})