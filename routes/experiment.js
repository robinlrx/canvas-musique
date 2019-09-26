const express = require('express')
const router = express.Router()
const { Experiment } = require('../models/index.js')

router.get('/', (req, res, next) => {
  return Experiment.findAll({
    order: [['createdAt', 'DESC']],
  })
    .then(experiment => res.send(experiment))
    .catch(err => {
      console.log('There was an error querying contacts', JSON.stringify(err))
      return res.send(err)
    })
})

module.exports = router
