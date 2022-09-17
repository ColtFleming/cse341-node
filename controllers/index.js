const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Lindsay Fleming');
});

module.exports = routes;