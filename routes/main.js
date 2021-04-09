__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.json({ error: "Silahkan baca dokumentasi di yah carik lh enak bae:v" })
})


module.exports = router
