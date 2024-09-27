import express from 'express'
import bodyParser from 'body-parser'
import PLC from './plc.js'

const app = express()
const port = 3000


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/data', (req, res) => {
  const { tags } = req.body
  PLC.getData(tags).then((data) => {
    res.json(data)
  })
})

app.listen(port, () => {
  console.log(`BE API server listening on port ${port}`)
})