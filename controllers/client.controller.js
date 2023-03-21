const Client = require('../models/client');

exports.getClient = async (req, res) => {
    try {
        const clients = await Client.find()
        res.send({ message: 'La liste des clients', clients })
    } catch (error) {
        res.status(500).send({ message: 'error server' })
    }
}
exports.updateClient = async (req, res) => {
    try {
        await Client.findByIdAndUpdate(req.params.id, req.body)
        res.send({ message: 'client modifié' })
    } catch (error) {
        res.status(500).send({ message: 'error server' })
    }
}
exports.deleteClient = async (req, res) => {
    try {
        await Client.findByIdAndDelete(req.params.id)
        res.send({ message: 'client supprimé' })
    } catch (error) {
        res.status(500).send({ message: 'error server' })
    }
}
