const CocktailOrder = require('../../models/CocktailOrder');
const cocktails = require('../data/cocktailData');

class OrderController {
  static getMenu(req, res) {
    res.render('menu', { menu: cocktails });
  }

  static placeOrder(req, res) {
    const { cocktailId } = req.body;
    CocktailOrder.addOrder({ id: cocktailId, status: 'Pending' });
    res.redirect('/order-queue');
  }

  static getOrderQueue(req, res) {
    const orders = CocktailOrder.getOrders(); 
    res.render('orderQueue', { orders });
  }
}

module.exports = OrderController;
