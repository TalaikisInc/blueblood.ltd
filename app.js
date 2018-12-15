const express = require('express')
const { join } = require('path')
const app = express()

app.use(require('compression')())
app.use(express.static(join(__dirname, 'build')))

app.get('/*', (req, res) => {
  res.sendFile(join(__dirname, 'build', 'index.html'))
})

if (require.main === module) {
  const PORT = process.env.NODE_ENV === 'production' ? process.env.PROD_PORT : 3064
  app.listen(PORT, '0.0.0.0', (err) => {
    if (err) {
      console.log(err)
    }
    console.info(`==> listening on http://localhost:${PORT}.`)
  })
}

module.exports = app
