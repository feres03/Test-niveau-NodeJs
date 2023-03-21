const mongoose = require('mongoose');
const schema = mongoose.Schema;
const CommandeSchema = new schema({
    Prix: {
        type: Number,
        required: true
    },
    Listedesproduits: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produit'
    }],
    Clientassocié: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',

    }
}, {
    timestamps: true,
    versionkey: false
})
module.exports = mongoose.model('Commande', CommandeSchema)
