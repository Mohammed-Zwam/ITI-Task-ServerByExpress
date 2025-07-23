const messages = require('../util/helpers');

module.exports = (req, res, next, id) => {
    if (Number(id)) {
        req.id = Number(id);
        next();
    } else {
        res.status(404).send(messages.INVALID_ID);
    }
}