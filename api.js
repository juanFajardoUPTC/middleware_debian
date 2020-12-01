const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

var fs = require('fs');
var respuestas = "";



app.get('/', (req, res) => {
    imprimir()
    res.send(respuestas)
  })

  function imprimir() {
    fs.readFile('servidor1.txt', 'utf8', function(err, data) {
        if (err) {
          return console.log(err);
        }
        respuestas+=data+"<br>"      
        console.log(data);
      })
      fs.readFile('servidor2.txt', 'utf8', function(err, data) {
        if (err) {
          return console.log(err);
        }
        respuestas+=data+"<br>"      
        console.log(data);
      })
  }


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})