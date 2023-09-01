const express = require('express');
const router = express.Router();
const dogsController = require('../../controllers/api/dogs');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// BASE URL: /api/dogs
router.get('/', dogsController.index)
router.get('/breeders', dogsController.breederIndex)
router.post('/', dogsController.create);
router.post('/newbreeder', dogsController.breederCreate);
router.get('/breeders/:id', dogsController.breederDetail);
router.get('/breeders/:id/edit', dogsController.breederEdit);
router.put('/breeders/:id', dogsController.breederUpdate);
router.get('/:id', dogsController.detail);
router.delete('/:id', dogsController.deleteDog);
router.put('/:id', dogsController.update);
router.get('/:id/edit', dogsController.edit);
router.get('/quizResult', (req, res) => {
    // You can send a JSON response or render an HTML template if needed
    res.json({ message: 'This is the QuizResult page' });
});


module.exports = router;