

let orders = []; 

class CocktailOrder {
  static addOrder(order) {
    orders.push(order);
  }

  static getOrders() {
    return orders;
  }
}

module.exports = CocktailOrder;
