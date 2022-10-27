const express = require('express')
const app = express()

app.use(express.static("./public"));
app.set('view engine', 'ejs');
app.set('views', './public');

app.get('/', (req, res) => {
  res.render('trangchu')
})

app.listen(8000, () => {
  console.log(`Example app listening on port ${8000}`)
})
