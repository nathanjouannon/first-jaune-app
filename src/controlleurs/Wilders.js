const dataSource = require('../Utils').dataSource
const wilder = require('../entity/Wilders')

module.exports = {
    create : (req, res) => {
        dataSource
            .getRepository(wilder)
            .save(req.body)
            .then(() => {
            res.send("created wilder")
            })
            .catch(() => {
                res.send("error wile creating new wilder")
            })
        res.send('hello from wilder controller')
    },
}