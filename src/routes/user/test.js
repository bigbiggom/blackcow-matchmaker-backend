const db = require('../../database');

app.get('/:id', (req, res, next) => {
  db.query('SELECT * FROM users WHERE id = $1', [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows[0])
  })
})
// ... many other routes in this file

const router = require('express').Router()


router.get('/', (req, res) => {
    // router code here
    res.send('<p>dalbu babo coding gae gu su dal po dong missile bal sa</p>')
})


router.get('/json', (req, res) => {
    // router code here
    res.json({
        user: 'tobi'
    })
    res.status(500).json({
        error: 'message'
    })
})



module.exports = router