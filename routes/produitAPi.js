const express = require('express');
const { getProduit, getbyIDProduit, addProduit, updateProduit, deleteProduit } = require('../controllers/produit.controller');


const router = express.Router();
router.post('/ajoutproduit', addProduit);
router.get('/', getProduit);
router.get('/produit/:id', getbyIDProduit)
router.put('/produit/:id', updateProduit)
router.delete('/produit/:id', deleteProduit)

module.exports = router;
