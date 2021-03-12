const express = require('express')
var fetch = require('node-fetch');
const path = require('path');
const app = express()
const port = 3000



// Tell express to use a 'static' folder
// If the url matches a file it will send that filei
app.use(express.static(path.join(__dirname, "static/public")));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', function(req, res) {
  res.send('Hello World!')
})

// Create a route for our overview page
app.get('/artobjects', function(res) {
  fetch('https://www.rijksmuseum.nl/api/nl/collection/?key=7TAeATmh&ps=200')
    .then(res => res.json())
    .then(json => console.log(json)),

      function(err, res, body){
      
        if (err) {
          // We got an error
          res.send(err);
          } 
          
        else {
          // Render the page using the 'posts' view and our body data
          res.render('artObjects.ejs', {
            postData: body
            });
          }
	};
});


app.listen(port, function() {
  console.log(`Example app listening at http://localhost:${port}`)
})

