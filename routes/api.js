__path = process.cwd()

var express = require('express');

var creatorList = ['@zahirrr','@zhirrrgans','@zhirr_ajalah','@zahiranjay', '@zahirganssss','@zhirrganteng','@zahirrgantengg'];
var creator = creatorList[Math.floor(Math.random() * creatorList.length)];


var secure = require('ssl-express-www');
var cors = require('cors');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var router  = express.Router();
var { color, bgcolor } = require(__path + '/lib/color.js');

var {
	ListBioskop,
	ListKota,
	ComingSoon,
	ComingSoonPage,
	JadwalBioskop
} = require('./../lib');


router.get('/bioskop/all', async (req, res, next) => {
	var page = req.query.page

		ListBioskop(page)
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
})

router.get('/comingsoon/all', async (req, res, next) => {

		ComingSoon()
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
})

router.get('/daftar/bioskop', async (req, res, next) => {
	var daerah = req.query.daerah,
	       page = req.query.page

		ListKota(daerah, page)
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
})

router.get('/comingsoon', async (req, res, next) => {
	var page = req.query.page

		ComingSoonPage(page)
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
})

router.get('/now-playing', async (req, res, next) => {

		JadwalBioskop()
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
})


module.exports = router
