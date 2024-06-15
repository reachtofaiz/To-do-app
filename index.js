const path = require('path')
const express = require('express')
const app = express()
const port = 3000
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/a', (req, res) => {
    res.send('Your backend runs sucessfully')
    })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})