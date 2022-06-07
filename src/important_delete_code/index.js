app.use((req, res, next) => {
    if (req.method === 'GET'){
        res.send('GET requests are disable')
    } else {
      next()
    }
})

app.use((req, res, next) => {
    res.status(503).send('Site is currently down. Check back soon!')
})