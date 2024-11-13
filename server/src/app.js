const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose'); // Підключаємо Mongoose
require('dotenv').config(); // Завантажуємо змінні середовища з .env
const cors = require('cors');
const app = express();
const PORT = 3000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Підключення до MongoDB успішне');
  })
  .catch((err) => {
    console.error('Помилка підключення до MongoDB:', err);
  });
const corsOptions = {
  origin: 'http://localhost:3001',
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/", routes)

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});
