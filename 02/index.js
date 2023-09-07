const express = require('express')

const servidor = express()

let minutos = 0
let segundos = 0
let temporizador

servidor.get('/principal', function (req, res) {

    res.send(`tempo atual do cronometro: ${minutos.toString().padStart(2, '0')} minutos e ${segundos.toString().padStart(2, '0')} segundos`)

})

servidor.get('/iniciar', function (req, res) {

    temporizador = setInterval(function () {
        segundos++

        if (segundos === 60) {
            minutos++
            segundos = 0

        }
        if (minutos === 59 && segundos === 60) {
            segundos = 0
            minutos = 0
        }
    }, 1000)

    res.send("cronometro iniciado")
})

servidor.get('/pausar', function (req, res) {
    clearInterval(temporizador)
    res.send('cronometro pausado')

})

servidor.get('/continuar', function (req, res) {

    temporizador = setInterval(function () {
        segundos++

        if (segundos === 60) {
            minutos++
            segundos = 0

        }
        if (minutos === 59 && segundos === 60) {
            segundos = 0
            minutos = 0
        }
    }, 1000)

    res.send('temporizador retomado')
})

servidor.get('/zerar', function (req, res) {
    temporizador = 0
    clearInterval(temporizador)
    res.send('cronometro zerado')

})

servidor.listen(8000)