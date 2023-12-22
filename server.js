const express = require('express')
const cors = require('cors')
const db = require('./database/db')
const Coaster = require('./model/Coaster.model')

const app = express();
const port = 6002;

//middlewares
app.use(express.json());
app.use(cors());

//las rutas
app.get('/api/coasters', (req, res) => {
    Coaster
        .find()
        .then(allCoasters => res.json(allCoasters))
});

app.get('/api/details/:coaster_id', (req, res) => {
    const {coaster_id} = req.params
    Coaster
        .findById(coaster_id)
        .then(coaster => res.json(coaster))
})

//escuchar al servidor
app.listen( port, ()=> {
    console.log(`escuchando al servidor en el puerto ${port}`)
})