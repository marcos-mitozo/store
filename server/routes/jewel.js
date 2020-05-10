let express = require('express')
let router = express.Router()
const controller = require('../controllers/jewel')

router.post('/', controller.post)

router.get('/', controller.get)
router.get('/:slug', controller.getBySlug)
router.get('/tags/:tag', controller.getByTag)

router.put('/:id', controller.put)

router.delete('/', controller.delete)

module.exports = router;
