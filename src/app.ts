import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send("Hello World, Fluffy")
})

app.listen(3000, () =>{
  console.log('Running on 3000')
})
