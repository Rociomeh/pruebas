const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Rocio:chocolate@cluster0.ev10vgd.mongodb.net/miapp?retryWrites=true&w=majority')

const User = mongoose.model ('User' , {
    username: String,
    edad: Number,
})


//Crear()
const crear = async () => {
    const user = new User({ username: 'patito triste', edad: 25 })
    const savedUser = await user.save() 
    console.log(savedUser)
}


//buscarTodo()

const buscarTodo = async () => {
    const users = await User.find()
    console.log(users)
}

//buscar()

const buscar = async () => {
    const user = await User.find({ username: 'patito' })
    console.log(user)
}


//buscarUno()

const buscarUno = async () => {
    const user = await User.findOne({ username: 'patito' })
    console.log(user)
}


//actualizar()
const actualizar = async () => {
    const user = await User.findOne({ username: 'patito triste' })
    console.log(user)
    user.edad = 5
    await user.save()
}


//eliminar()

const eliminar = async () => {
    const user = await User.findOne({ username: 'patito triste' })
    console.log(user)
    if (user) {  //esta condicion verifica que exista el usuario escrito en la linea 54 y si existe ejecuta el codigo que esta dentro de las {}
        await user.remove()
    }
}

//Puedes eliminar lo que esta abajo , lo escribi yo para ir ejecutando las funciones con la parte de el index.js

//buscarTodo()
//crear()
//buscar()
//buscarUno()
//actualizar()
//eliminar()


//SIGUE ASI AMORCITO, ERES SECA , YA ESTAS VIENDO COSAS DIFICILES ASI QUE CON MAYOR RAZON ERES SECA ! TI AMO :*