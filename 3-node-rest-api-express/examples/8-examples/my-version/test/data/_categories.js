var categories = [
  { _id: 'Electronics' },
  { _id: 'Phones', parent: 'Electronics' },
  { _id: 'Laptops', parent: 'Electronics' },
  { _id: 'Bacon' }
]

module.exports = categories;