const express = require("express")
const path = require('path');
// require('dotenv').config();
const compression = require('compression');
const app = express()


const PORT = process.env.PORT || 3000;
const getData = require('./modules/api.js')


// Tell express to use a 'static/public' folder
// If the url matches a file it will send that file
app.use(compression({ filter: shouldCompress }));
app.use(express.static(path.join(__dirname, "static/public")));
app.set('view engine', 'ejs');
app.set('views', 'views');

function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) {return false}
  return compression.filter(req, res)
}

let i = 0;


function loadingContent() {
  if( i >= 100 - 1) {
    i = 1
  }
  else {
    i = i + 1
  }
};


app.get('/', async function renderOverview(req, res){
  loadingContent()
  console.log(i)
  let url = `https://www.rijksmuseum.nl/api/nl/collection/?key=7TAeATmh&p=${i}&ps=6`
  const data = await getData(url)
  
  const thumbnails = [];
  const artObjects = data.artObjects;

  artObjects.forEach((artObject) => {
    const orginalImage = artObject.webImage.url;
    const editImage = orginalImage.slice(0, -1);
    const smallerImg = editImage + '400';
    const thumbnail = {
      number: artObject.objectNumber,
      artist: artObject.principalOrFirstMaker,
      titel: artObject.title,
      imageUrl: smallerImg,
      imageWidth: 300
    }
    thumbnails.push(thumbnail);
  })

  res.render('artObjects.ejs',{
    postData: thumbnails
  })
})

function backContent() {
  if( i >= 100 - 1) {
    i = 1
  }
  else {
    i = i - 1
  }
};

app.get('/artobjects/:objectNumber', async function renderDetail(req, res){
  backContent()
  const url = `https://www.rijksmuseum.nl/api/nl/collection/${req.params.objectNumber}?key=7TAeATmh`
  const data = await getData(url)
  const artObject = data.artObject

  const orginalImage = artObject.webImage.url;
		const editImage = orginalImage.slice(0, -1);
    const smallerImg = editImage + '400';
    const longtitle = artObject.longTitle;
    const artist = artObject.principalOrFirstMaker;
    const objnr = artObject.objectNumber;
    const places = artObject.productionPlaces;

  res.render('artObject.ejs', { 
    postData: {smallerImg, longtitle, artist, objnr, places}
  })
})

app.get('/offline', function (req, res) {
  res.render('offline');
})

// listen for requests
app.listen(PORT, () => {
  console.log(`App is launched on http://localhost:${PORT}`)
});
