const express = require("express")
const path = require('path');
require('dotenv').config();

const app = express()


const PORT = process.env.PORT || 3000;
const getData = require('./modules/api.js')


// Tell express to use a 'static/public' folder
// If the url matches a file it will send that file
app.use(express.static(path.join(__dirname, "static/public")));
app.set('view engine', 'ejs');
app.set('views', 'views');


app.get('/', function(req, res,) {
  res.send('Hello World!')
});


app.get('/artobjects', async function renderOverview(req, res){
  const url = 'https://www.rijksmuseum.nl/api/nl/collection/?key=7TAeATmh&ps=200'
  const data = await getData(url)
  const artList = data.artObjects
  // console.log(artList)

  res.render('artObjects.ejs',{
    artList: artList
  })
})

app.get('/artobjects/:objectNumber', async function renderDetail(req, res){
  const url = `https://www.rijksmuseum.nl/api/nl/collection/${req.params.objectNumber}?key=7TAeATmh`
  const data = await getData(url)
  const artObject = data.artObject

  res.render('artObject.ejs', { artObject })
})


// listen for requests
app.listen(PORT, () => {
  console.log(`App is launched on http://localhost:${PORT}`)
});

