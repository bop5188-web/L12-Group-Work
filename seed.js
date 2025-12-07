const mongoose = require('mongoose');
const Product = require('./models/Product');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/storefront');

  const products = [
    {
      name: 'Laptop',
      description: 'High-performance laptop for work and gaming',
      price: 999.99,
      category: 'Electronics',
      stock: 10
    },
    {
      name: 'Smartphone',
      description: 'Latest model smartphone with advanced features',
      price: 699.99,
      category: 'Electronics',
      stock: 25
    },
    {
      name: 'Headphones',
      description: 'Wireless noise-cancelling headphones',
      price: 199.99,
      category: 'Audio',
      stock: 50
    },
    {
      name: 'Tablet',
      description: '10-inch tablet perfect for reading and browsing',
      price: 399.99,
      category: 'Electronics',
      stock: 15
    },
    {
      name: 'Smart Watch',
      description: 'Fitness tracking smartwatch',
      price: 249.99,
      category: 'Wearables',
      stock: 30
    }
  ];

  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.connection.close();
  }
}
