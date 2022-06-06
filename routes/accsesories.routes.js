const Router = require('express')
const router = new Router()
const accsController = require('../controller/accsesories.controller')

router.get('/getAllAccs', accsController.getAllAccs);
router.post('/addAccs', accsController.createAccs)

module.exports = router