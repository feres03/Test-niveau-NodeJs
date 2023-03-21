const express = require('express');
const { addCommande, Listedescommandes, getbyIDcommande } = require('../controllers/commande.controller');

const router = express.Router();
router.post('/command', addCommande);
router.get('/command', Listedescommandes);
router.get('/command/:id', getbyIDcommande)

module.exports = router