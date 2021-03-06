const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/detail/:slug', (req, res) => {
      const actualPage = '/detail'
      const queryParams = { slug: req.params.slug }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    const portInProd = process.env.PORT || 3003
    const PORT = dev ? 3000 : portInProd

    server.listen(PORT, (err) => {
      if (err) throw err
      // eslint-disable-next-line
      console.log(`> Ready on http://localhost:${PORT}`)
    })
  })
  .catch((ex) => {
    // eslint-disable-next-line
    console.error(ex.stack)
    process.exit(1)
  })
