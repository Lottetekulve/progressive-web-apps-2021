const fetch = require('node-fetch')
let isLoading = true;

module.exports = async function getData(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(err => console.log(err))
        .finally(function() { isLoading = false; });
}

