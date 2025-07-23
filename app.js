const express = require('express');
const { PORT, INVALID_REQUEST } = require('./util/helpers');
const server = express();
const productRouter = require('./routes/ProductRoutes');


// Middlewares
server.use(express.json());
server.use('/', express.static('views'))

// Routes

server.use('/api/products', productRouter);


server.all('*', (req, res) => {
    res.status(404).send(INVALID_REQUEST);
});


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = server;