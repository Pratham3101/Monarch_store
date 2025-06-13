const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// App setup
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mounarch_cart', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Mongoose schema and model
const cartItemSchema = new mongoose.Schema({
  id: Number,
  title: String,
  image: String,
  price: Number,
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

// API: Add to cart
app.post('/api/cart', async (req, res) => {
  try {
    const item = new CartItem(req.body);
    await item.save();
    res.status(201).json({ message: 'Item added to cart' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
});

// API: Get all cart items
app.get('/api/cart', async (req, res) => {
  try {
    const items = await CartItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch cart items' });
  }
});

// API: Remove item from cart
app.delete('/api/cart/:id', async (req, res) => {
  await CartItem.findByIdAndDelete(req.params.id);
  res.send({ message: 'Item removed from cart' });
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
