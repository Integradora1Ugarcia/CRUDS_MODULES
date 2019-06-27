const express = require ('express');
const router = express.Router();

const pc = require('../controllers/pc.controller');

router.get('/', pc.getPcs);
router.post('/', pc.createPc);
router.get('/:id', pc.getPc);
router.put('/:id', pc.editPc);
router.delete('/:id', pc.deletePc);

module.exports = router;