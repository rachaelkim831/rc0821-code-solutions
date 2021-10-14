const { errorMonitor } = require('events');
const takeAChance = require('./take-a-chance');

const rachael = takeAChance('Rachael');
rachael.then(response => {
  console.log(response);
}).catch(err => {
  console.log(err);
})
;
