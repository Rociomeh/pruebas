const User = {
    get: (req, res) => {
        res.status(200).send('Este es un chancho')
    },
    list: (req, res) => {
        res.status (200).send('Hola') 
    },
    create: (req, res) => {
        res.status(201).send('Creando')
    },
    update: (req, res) => {
        res.status(204).send('Actualizando')
    },
    destroy: (req, res) => {
        res.status(204).send('Eliminando')
    }
}

module.exports = User