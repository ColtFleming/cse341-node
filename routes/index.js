const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Colt Fleming');
});

module.exports = routes;