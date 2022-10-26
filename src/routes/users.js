const { Router } = require('express');
const router = Router();

router.route('/')
  .get((req, res) => res.json({ message: 'GET - Users routes' }))
  .post((req, res) => res.send('POST - Users routes'))

router.route('/:id')
//  .get();
  .put((req, res) => res.json({ message: 'PUT - Users routes' }))
  .delete((req, res) => res.json({ message: 'DELETE - Users routes' }))

module.exports = router