const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Rocio:chocolate@cluster0.ev10vgd.mongodb.net/?retryWrites=true&w=majority')

const User = mongoose.model ('User' , {
    username: String,
    edad: Number,
})

const Crear = async () => {
    const user = new User({ username: 'patito', edad: 25 })
    const savedUser = await user.save() 
    console.log(savedUser)
}

//Crear()

const buscarTodo = async () => {
    const users = await User.find()
    console.log(users)
}

//buscarTodo()

const buscar = async () => {
    const user = await User.find({ username: 'patito' })
    console.log(user)
}

//buscar()

const buscarUno = async () => {
    const user = await User.findOne({ username: 'patito' })
    console.log(user)
}
//buscarUno()

const actualizar = async () => {
    const user = await User.findOne({ username: 'patito' })
    console.log(user)
    user.edad = 30
    await user.save()
}

//actualizar()

const eliminar = async () => {
    const user = await User.findOne({ username: 'patito' })
    console.log(user)
    await user.remove()
}

eliminar()