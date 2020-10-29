const express = require('express')
const app = express()
const hbs = require('hbs')
require('./hbs/helpers')

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))
hbs.registerPartials(__dirname + '/views/partials', (err) => {
    console.log(err)
})
app.set('view engine', 'hbs')



// app.get('/', (req, res) => {


//     let salida = {
//         nombre: 'miguel',
//         edad: 3,
//         url: req.url
//     }

//     res.send(salida)


//     //res.send('Hola Mundo');
// })


app.get('/', (req, res) => {

    res.render('home', {
            nombre: 'miGuEl jose lopez',

        })
        //res.send('Hola Mundo');
})

app.get('/about', (req, res) => {

    res.render('about')
        //res.send('Hola Mundo');
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto  ${port}`)
})