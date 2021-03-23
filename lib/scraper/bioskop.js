const axios = require('axios')
const cheerio = require('cheerio')

async function ListBioskop(page) {
  return new Promise((resolve, reject) => {
    axios.get(`https://jadwalnonton.com/bioskop/?page=${page}`)
      .then(({
        data
      }) => {
        const $ = cheerio.load(data)
        let bioskop = []
        let img = []
        let url = []
        $('div.row > div.item > div.bg > a').get().map((rest) => {
         url.push($(rest).attr('href'))
         })
 	$('div.row > div.item > div.bg > a > img').get().map((rest) => {
         img.push($(rest).attr('src'))
         })
         $('div.row > div.item > div.bg > a > img').get().map((rest) => {
         bioskop.push($(rest).attr('alt'))
         })
     let result = []
     for (let i = 0; i < url.length; i++) {
          result.push({
          	image: img[i],
          nama: bioskop[i]
          })
     }
            
        const res = {
            status: 200,
            hasil: result
          }
          resolve(res)
      })
      .catch(reject)
  })
}

module.exports = ListBioskop