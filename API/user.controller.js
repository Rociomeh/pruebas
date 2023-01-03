const Users = require('./User')

const User = {
    get: async (req, res) => {
        res.status(200).send('Este es un chancho')
    },
    list: async (req, res) => {
        const users = await Users.find()
        res.status(200).send(users) 
    },
    create: async (req, res) => {
        console.log(req, body)
        res.status(201).send('Creando')
    },
    update: async (req, res) => {
        res.status(204).send('Actualizando')
    },
    destroy: async (req, res) => {
        res.status(204).send('Eliminando')
    }
}

module.exports = User