__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    config = {
        status: true,
        result: {
            "baca docs nya di github.com/Zhirrr"
        }
    }
    res.json(config)
})


module.exports = router
