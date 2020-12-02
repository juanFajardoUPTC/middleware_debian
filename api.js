const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

const readline = require("readline"),
fs = require('fs');
var respuestas1 = "";
var respuestas2 = "";



app.get('/', (req, res) => {

  
  respuestas1+="<br>Servidor 1<br>"
  respuestas2+="<br>Servidor 2<br>"
    imprimir1()    
    imprimir2()
    res.send(respuestas1+respuestas2)
    respuestas1 = ""
  respuestas2 = ""
  
 
    //actualizar()
    //setInterval("actualizar()",1000);
    
    
  })

  //function actualizar(){location.reload();}
  
  function timedRefresh(timeoutPeriod) {
    setTimeout("location.reload(true);",timeoutPeriod);
  }
  
  
  function imprimir1() {    
    
    NOMBRE_ARCHIVO = "servidor1.txt";

let lector = readline.createInterface({
    input: fs.createReadStream(NOMBRE_ARCHIVO)
});

lector.on("line", linea => {
  aux=linea+""
  if (aux.indexOf("Destination Host Unreachable")>0) {
    respuestas1+="0"
  }else{respuestas1+="1"}
  
});
  }


  function imprimir2() {

NOMBRE_ARCHIVO2 = "servidor2.txt";

lector = readline.createInterface({
    input: fs.createReadStream(NOMBRE_ARCHIVO2)
});

lector.on("line", linea => {
  aux=linea+""
  if (aux.indexOf("Destination Host Unreachable")>0) {
    respuestas2+="0"
  }else{respuestas2+="1"}
    
});
   
      
      
  }


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})