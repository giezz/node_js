const Router = require('express')
const router = new Router()
const clientController = require('../controller/clients.controller')

router.get('/getAllClients', clientController.getAllClients);
router.post('/createClient', clientController.createClient)

module.exports = router