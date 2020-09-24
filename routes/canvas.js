const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/canvas', (req, res, next) => {
  res.render('canvas', { title: 'Express' })
})

module.exports = router
