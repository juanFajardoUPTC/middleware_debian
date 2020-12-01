const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

var fs = require('fs');
var respuestas = "";



app.get('/', (req, res) => {
    imprimir()
    res.send(respuestas)
    respuestas = ""
    //actualizar()
    //setInterval("actualizar()",1000);
  })

  //function actualizar(){location.reload();}
  


  function imprimir() {
    
    fs.readFile('servidor1.txt', 'utf8', function(err, data) {
        if (err) {
          return console.log(err);
        }
        respuestas+="Servidor 1<br>"
        respuestas+=data+"<br><br>"      
        
      })
      fs.readFile('servidor2.txt', 'utf8', function(err, data) {
        if (err) {
          return console.log(err);
        }
        respuestas+="Servidor 2<br>"
        respuestas+=data+"<br><br>"       
      })
      console.log(respuestas);
      
  }


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})