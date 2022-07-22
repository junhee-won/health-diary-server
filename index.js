const express = require('express')
const cors = require('cors');
const app = express()
const port = 8000

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/sign-in', (req, res) => {
  res.json({
    success: true,
    body: req.body
  })
})

app.listen(port, () => {
  console.log(`Health-Diary-Server start on port ${port}`)
})