const db = require('../../database/config');

// routes/users.js
const router = require('express').Router()
const User = require('../../models/user')

app.get('/:id', (req, res, next) => {
  db.query('SELECT * FROM users WHERE id = $1', [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows[0])
  })
})
// ... many other routes in this file

router.get('/', (req, res) => {
    // router code here
    res.send('<p>dalbu babo coding gae gu su dal po dong missile bal sa</p>')
})


router.get('/', (req, res) => {
    User.findAll().then((users) => {
        if(!users.length) return res.status(404).send({err: 'User not found'})
        res.send(users)
    }). catch(err => {
        res.status(500).send(err)
    })
})

module.exports = router
