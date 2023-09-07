const express = require('express')

const servidor = express()

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"]

let i = 0

servidor.get('/', function (req, res) {

    res.send(jogadores[i])

    if (i === jogadores.length - 1) {
        i = 0
        res.send(jogadores[i])
    }

    i++
})


servidor.listen(3000)