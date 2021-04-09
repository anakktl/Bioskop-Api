__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.json({ error: "Silahkan baca dokumentasi di https://github.com/anakktl/Bioskop-Api" })
})


module.exports = router
