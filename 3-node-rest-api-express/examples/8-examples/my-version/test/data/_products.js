var products = [
  {
    name: 'LG G4',
    category: { _id: 'Phones', ancestors: ['Electronics', 'Phones'] },
    price: {
      amount: 300,
      currency: 'USD'
    }
  },
  {
    _id: '<%PRODUCT_ID%>',
    name: 'Asus Zenbook Prime',
    category: { _id: 'Laptops', ancestors: ['Electronics', 'Laptops'] },
    price: {
      amount: 2000,
      currency: 'USD'
    }
  },
  {
    name: 'Flying Pigs Farm Pasture Raised Pork Bacon',
    category: { _id: 'Bacon', ancestors: ['Bacon'] },
    price: {
      amount: 20,
      currency: 'USD'
    }
  }
];

module.exports = products;