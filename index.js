const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

// configuracao do nunjucks
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

// sinaliza para o express lidar com informacoes provenientes de um formulario html
app.use(express.urlencoded({ extended: false }))
// seta no expresse que sera utilizado os arquivos njk para visualizacao
app.set('view engine', 'njk')

const inputMiddleware = (req, res, next) => {
  if (!req.body.age) return res.redirect('/')
  return next()
}

app.get('/', (req, res) => {
  res.render('age')
})

app.post('/check', inputMiddleware, (req, res) => {
  let age = req.body.age
  if (age < 18) return res.render('minor', { age })
  else return res.render('major', { age })
})

app.listen(3000)
