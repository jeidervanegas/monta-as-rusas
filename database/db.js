const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://root:root@coasters.x4f4xqk.mongodb.net/mern-uno'

mongoose
    .connect(MONGO_URL)
    .then(() => console.log('CONECTADO A LA BASE DE DATOS'))
    .catch((error) => console.error('[DB ERROR]', error?.message))