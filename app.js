const express = require('express')
const app = express()
const port = 3000

const router = require("./router.js");

app.use("/", router);

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/login', (req, res) => {
//     res.send('Please login')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})