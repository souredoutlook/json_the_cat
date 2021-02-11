const request = require('request');
const breedName = process.argv[2];

request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName,(error, response, body) => {
  if (error) throw error;
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log(`No breed found when searching: "${breedName}"`);
  } else {
    console.log(`${data[0].name}: ${data[0].description}`);
  }
});