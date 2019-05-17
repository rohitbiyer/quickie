const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log("Hello from developer!")
    res.send('Hello World!')
})

app.post('/user', (req, res) => {
    const user = (req.body.user)
    res.send(`Hello ${user}`)
  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))