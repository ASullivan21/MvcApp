const express = require('express');
const path = require('path');
const OrderController = require('./MvcApp/controllers/OrderController');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route for the root URL
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Bartender Application</h1><a href="/menu">View Cocktail Menu</a> <a href="/order-queue">View Order Queue</a>');
});

app.get('/menu', OrderController.getMenu);

app.post('/place-order', OrderController.placeOrder);

app.get('/order-queue', OrderController.getOrderQueue);

// Starts  server
app.listen(3000, () => console.log('Server running'));
