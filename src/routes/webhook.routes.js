const {Router} = require('express')
const router =Router()
const {testWebHook} = require('../controllers/webhook.controllers.')

router.post('/webHook', testWebHook)

module.exports = router