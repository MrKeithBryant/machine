const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const items = require('./models/inventory');

app.get('/', function (req, res) {
  console.log('Heatin up');
});



app.post('/', function (req, res) {
  res.send('Populated');
});

app.listen(3000, function () {
  console.log('Startin up');
});

/*GET /api/customer/items  //get a list of items
POST /api/customer/items/:itemId/purchases  //purchase an item
GET /api/vendor/purchases  //get a list of all purchases with their item and date/time
GET /api/vendor/money  //get a total amount of money accepted by the machine
POST /api/vendor/items  //add a new item not previously existing in the machine
PUT /api/vendor/items/:itemId  //update item quantity, description, and cost
*/
