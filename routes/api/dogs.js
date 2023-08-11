const express = require('express');
const router = express.Router();
const dogsController = require('../../controllers/api/dogs');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// BASE URL: /api/dogs
router.get('/', dogsController.index)
router.get('/breeders', dogsController.breederIndex)
router.post('/', dogsController.create);
router.post('/newbreeder', dogsController.breederCreate);
router.get('/breeders/:id', dogsController.breederDetail)
router.get('/:id', dogsController.detail);
router.delete('/:id', dogsController.deleteDog);
router.put('/:id', dogsController.update)
router.get('/:id/edit', dogsController.edit)

module.exports = router;