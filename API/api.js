const express = require("express")
const user = ('./user.controller')
const app = express()
const port = 3000

app.get('/', user.list)
app.post('/', user.create)
app.get('/:id', user.get)
app.put('/:id', user.update)
app.patch('/:id', user.update)
app.delete('/:id', user.destroy)

app.get('*', (res, req) => {
    res.statusCode(404).send('no existe')
}) 

app.listen(port, () => {
    console.log("Arrancando la aplicacion")
})