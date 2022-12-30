const express = require('express')
const hbs = require('hbs')

const app = express()
const port = 8080

app.set('view engine', 'hbs')
hbs.registerPartials( __dirname + '/views/partials' )

app.use(express.static('public'))

app.get('/', (req, res) => {
  // res.sendFile( __dirname + '/public/generic.html' )
  res.render('home', {
    name: 'Miguel Lopez',
    title: 'Handlebars'
  })
})

app.get('/generic', (req, res) => {
  // res.sendFile( __dirname + '/public/generic.html' )
  res.render('generic', {
    name: 'Miguel Lopez',
    title: 'Handlebars'
  })
})

app.get('/elements', (req, res) => {
  // res.sendFile( __dirname + '/public/elements.html' )
  res.render('elements', {
    name: 'Miguel Lopez',
    title: 'Handlebars'
  })
})

app.get('*', (req, res) => {
  // res.sendFile( __dirname + '/public/404.html' )
  res.render('404')
})

app.listen(port, () => {
  console.log(`Server UP from port ${port}`)
})
