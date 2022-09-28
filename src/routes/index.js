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