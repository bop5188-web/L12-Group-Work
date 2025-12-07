const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const Product = require('./models/Product');
const Cart = require('./models/Cart');
const Shipping = require('./models/Shipping');
const Billing = require('./models/Billing');
const Return = require('./models/Return');
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/cart', async (req, res) => {
  try {
    const cart = await Cart.find();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/cart', async (req, res) => {
  try {
    const cartItem = new Cart(req.body);
    await cartItem.save();
    res.json(cartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/cart/:id', async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/shipping', async (req, res) => {
  try {
    const shipping = await Shipping.find();
    res.json(shipping);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/shipping', async (req, res) => {
  try {
    const shipping = new Shipping(req.body);
    await shipping.save();
    res.json(shipping);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/billing', async (req, res) => {
  try {
    const billing = await Billing.find();
    res.json(billing);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/billing', async (req, res) => {
  try {
    const billing = new Billing(req.body);
    await billing.save();
    res.json(billing);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/returns', async (req, res) => {
  try {
    const returns = await Return.find();
    res.json(returns);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/returns', async (req, res) => {
  try {
    const returnItem = new Return(req.body);
    await returnItem.save();
    res.json(returnItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

main().catch(err => {
  console.error(err);
  process.exit(1);
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/storefront');
  console.log('MongoDB connected successfully');
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}