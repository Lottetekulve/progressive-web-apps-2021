const express = require("express")
const path = require('path');
const app = express()
const port = 3000
const getData = require('./modules/api.js')

const data = getData()

// Tell express to use a 'static/public' folder
// If the url matches a file it will send that file
app.use(express.static(path.join(__dirname, "static/public")));
app.set('view engine', 'ejs');
app.set('views', 'views');


app.get('/', function(req, res,) {
  res.send('Hello World!')
});


app.get('/artobjects', function renderOverview(req, res){

  getData()

  res.render('artObjects.ejs',{
    artList: data
  })

})





// Create a route for overview page
// app.get('/artobjects', function(err, res) {

//     if (err) {
//       // We got an error
//       res.send(err);
//       } 
      
//     else {

//       res.render('artObjects.ejs', {
//         data: body
//         });
//       }
// });



app.listen(port, function() {
  console.log(`Example app listening at http://localhost:${port}`)
})

