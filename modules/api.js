const fetch = require('node-fetch')
const url = 'https://www.rijksmuseum.nl/api/nl/collection/?key=7TAeATmh'
// require('dotenv').config()

module.exports = async function getData(err, requestRes, json) {
    try {
        //fetch data
        const response = await fetch(url)
        const data = await response.json()
        return data
    }
    catch (err) {
        console.log(err)
        return err
    }
}