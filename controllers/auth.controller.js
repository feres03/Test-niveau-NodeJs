const Client = require('../models/client')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.Register = async (req, res) => {
    try {
        const found = await Client.findOne({ Email: req.body.Email })
        if (found) {
            res.status(400).send({ message: 'Email est déja enregistré.' })
        }
        else {
            const salt = bcrypt.genSaltSync(10);
            req.body.Password = bcrypt.hashSync(req.body.Password, salt);
            await Client.create(req.body)
            res.send({ message: "Ajouté avec succés" })
        }
    }
    catch (error) {
        res.status(500).send({ message: error.message || 'Error message' })
    }
}

exports.Login = async (req, res) => {
    try {
        const found = await Client.findOne({ Email: req.body.Email })
        console.log(found)
        if (found) {
            const passwordcheck = await bcrypt.compareSync(req.body.Password, found.Password)
            if (passwordcheck) {
                const data = {
                    idClient: found._id
                }
                const token = jwt.sign(data, 'Secret', { expiresIn: '1d' })

                res.send({ message: `Bienvenue ${found.Nom} , tu es connecté. `, token })
            }
            else {
                res.status(400).send({ message: "Verifiez votre email or password!" })
            }
        }
        else {
            res.status(400).send({ message: "Verifiez votre email or password!" })
        }
    }
    catch (error) {
        res.status(500).send({ message: error.message || 'Error' })
    }
}

