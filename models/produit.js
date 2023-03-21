const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ProduitSchema = new schema({
    Nom: {
        type: String,
        required: [true, 'Ce champs est obligaoire']
    },
    Description: {
        type: String,
        required: [true, 'Ce champs est obligaoire']
    },
    Quantite: {
        type: Number,
        required: [true, 'Ce champs est obligaoire']
    },
    Prix: {
        type: Number,
        required: [true, 'Ce champs est obligaoire']
    },
}, { timestamps: true, versionKey: false })
module.exports = mongoose.model('Produit', ProduitSchema)