const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path');

const app = express()
const port = 3000

// 預設樣板引擎
app.engine('.hbs', exphbs.engine({ extname: 'hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// 設定靜態檔案路由
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render('home')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.get('/portfolio', (req, res) => {
  res.render('portfolio')
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})