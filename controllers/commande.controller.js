const Commande = require('../models/commande')


exports.addCommande = async (req, res) => {
    try {
        await Commande.create(req.body)
        res.send({ message: 'Vous avez passé votre commande.' })
    } catch (error) {
        res.status(500).send({ message: 'error server' })
    }
}
exports.Listedescommandes = async (req, res) => {
    try {
        const commands = await Commande.find()
        res.send({ message: 'liste des commandes', commands })
    } catch (error) {
        res.status(500).send({ message: 'erreur serveur' })
    }
}
exports.getbyIDcommande = async (req, res) => {
    try {
        const commande = await Commande.findById(req.params.id)
        res.send({
            message: 'La commande désirée', commande
        })
    } catch (error) {
        res.status(500).send({ message: 'erreur serveur' })
    }
}
exports.affectproduits = async (req, res) => {
    try {
        const commandeFound = await Commande.findById(req.params.idMission)
        const list = await produit.findById(req.params.Produit)
        await Commande.findByIdAndUpdate(req.params.idCommande, { $push: { Listedesproduits: req.params.idProduit } }, { new: true })
    } catch (error) {
        res.status(500).send({ message: 'erreur serveur' })

    }
}

