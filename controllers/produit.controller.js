const Produit = require('../models/produit')

exports.getProduit = async (req, res) => {
    try {
        const produits = await Produit.find()
        res.send({ message: 'liste des produits', produits })
    } catch (error) {
        res.status(500).send({ message: 'erreur serveur' })
    }
}
exports.getbyIDProduit = async (req, res) => {
    try {
        const product = await Produit.findById(req.params.id)
        res.send({
            message: 'Le produit désiré', product
        })
    } catch (error) {
        res.status(500).send({ message: 'erreur serveur' })
    }
}
exports.addProduit = async (req, res) => {
    try {
        await Produit.create(req.body)
        res.send({ message: 'Produit ajouté' })
    } catch (error) {
        res.status(500).send({ message: 'erreur serveur' })
    }
}
exports.updateProduit = async (req, res) => {
    try {
        await Produit.findByIdAndUpdate(req.params.id, req.body)
        res.send({ message: 'Produit modifié' })
    } catch (error) {
        res.status(500).send({ message: 'erreur serveur' })
    }
}
exports.deleteProduit = async (req, res) => {
    try {
        await Produit.findByIdAndDelete(req.params.id)
        res.send({ message: 'Produit supprimé' })
    } catch (error) {
        res.status(500).send({ message: 'erreur serveur' })
    }
}
