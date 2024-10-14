import express from 'express'

const app = express()

app.get('/hello', (_, res) => {
  res.send('Hello World!')
})

app.listen(3333, () => {
  console.log('HTTP server running at http://localhost:3333')
})
