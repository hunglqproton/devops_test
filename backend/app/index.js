
const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello from Node.js app!')
}

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
