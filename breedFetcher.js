const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (!error) error = null;
    const data = JSON.parse(body);
    if (data[0]) {
      return callback(error, data[0].description);
    } else {
      return callback(error, `No breed found when searching: "${breedName}"`);
    }
  });
};

module.exports = {fetchBreedDescription};
