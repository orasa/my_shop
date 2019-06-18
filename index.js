const express = require('express')
const path = require('path') // this will allows send text files
const app = express()


app.use(express.static(path.join(__dirname, 'client')))

app.get('/shopwindow', (reg, res) => {
  res.sendFile(path.join(__dirname, '/client/shopwindow.html'))
})

app.listen(3000,() => {
  console.log("Server listening on port 3000");
})
