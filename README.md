<!-- Add a link to your live demo in Github Pages 🌐-->
Link naar live demo: https://rijksmuseum-app-pwa.herokuapp.com/

<!-- ☝️ replace this description with a description of your own work -->

# Table of content:
- About the app
- Get de data van de api
- Gebruik van de data
- Pagina's
- Buildscripts
- SW en manifest
- Critical rendering path


## Rijksmuseum webapp. Data gekregen uit API:
API link: https://www.rijksmuseum.nl/api/nl/collection/?key=7TAeATmh
 ![](./images/data.png)
In deze API is voor alle art objecten uit het rijksmuseum informatie te vinden. Denk aan de kunstenaar, uit welk jaar, waar het gemaakt is en natuurlijk de titel met een afbeelding. Daarnaast worden de artikel nummers vernoemd en links naar de detailpagina van het kunstwerk op de website van het rijksmuseum. 
Er komt overzichtspagina waarbij je alle art objects kan zien, samen met hun titel en de kunstenaar. Op de overzichtspagina komen filters om makkelijk een art object te kunnen terug vinden. Daarnaast krijgt elk art object een eigen detail page waar nog wat meer informatie te vinden zal zijn over de kunstwerken.

## Get de data van de api:
Deze code heb ik gebruikt om de data te fetchen uit de api.
- `module.exports = async function getData(url) {`
  `return fetch(url)`
    `.then((response) => response.json())`
   ` .catch((err) => console.log(err));`
`}`

## Gebruik van de data
Vervolgens gebruik ik deze code om van de data html elementen te maken.
- `app.get('/offline', function (req, res) {`
  `  res.render('offline');`
  `})`

- `app.get('/artobjects/:objectNumber', async function renderDetail(req, res){`
  `  const url = https://www.rijksmuseum.nl/api/nl/collection/${req.params.objectNumber}?key=7TAeATmh`
  `const data = await getData(url)`
  `  const artObject = data.artObject`
  `  res.render('artObject.ejs', { artObject }})`

- `link.appendChild(container);`
  `container.appendChild(picture);`

## Pagina's
Filter gebruik ik om de data te filteren en om een filter te hebben op de overzichtspagina.
- `<div class="overviewPage">`
      `<% artList.forEach(artobject => { %>`
     `  <a href='/artobjects/<%= artobject.objectNumber %>'> `
     ` <h2><%= artobject.title %></h2>`


## Buildscripts:
Buildscripts:
`gulp.src('./static/public/css/styles.css')`
`.pipe(concat('builded.css'))`
`.pipe(minify())`
`.pipe(gulp.dest('static/public'))`

## SW en Manifest:
Service worker:
`self.addEventListener('install', (event) => {`
`self.addEventListener("activate", (event) => {`
`self.addEventListener("fetch", (event) => {`

## Critical rendering path
Optimaliseren:
- compression, gulp (buildscripts), slice
`const compression = require('compression');`
`app.use(compression());`

```
const orginalImage = artObject.webImage.url;
    const editImage = orginalImage.slice(0, -1);
    const smallerImg = editImage + '400';
```

## Used Packages
- compression
- debug
- ejs
- express
- node-fetch
- dotenv
- gulp
- nodemon

Install:
1. npm install
2. npm install 
3. require: `const ... = require('...')`


# Install project
1. clone repo: 
``` 
https://github.com/Lottetekulve/progressive-web-apps-2021-lotte.git
```
2. Install used packages: 
```
npm install
```
3. Start op het web: 
```
npm run dev
```
4. Te vinden op: http://localhost:3000/