const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize, User } = require('./models');
const Sequelize = require('sequelize');
const app = express();
const bcrypt = require('bcrypt');
app.use(bodyParser.json());
app.use(cors());


app.use(express.static('public'));

app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).send(users);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Server error' });
  }
});






app.post('/users/authenticate', async (req, res) => {
  const { username, password } = req.body;
  
  const user = await User.findOne({ where: { username } });

  if (user) {

    const match = await bcrypt.compare(password, user.password);

    if (match) {
      // Ваши действия при успешной аутентификации, например, создание JWT, сохранение информации в сессии и т.д.
      res.status(200).json({ message: "Успешный вход!" });
    } 
  }
  else {
    res.status(401).json({ message: "Пароль или логин неверен" });
  }
});

app.post('/users/register', async (req, res) => {
  try {
    const { username, firstname, lastname, email, password } = req.body;

    const userCount = await User.count();

    let existingUser = null;
    if (userCount > 0) {
      existingUser = await User.findOne({
        where: { [Sequelize.Op.or]: [{ username }, { email }] }
      });
    }

    if (existingUser) {
      const errorField = existingUser.username === username ? 'username' : 'email';
      return res.status(400).send({ message: `The specified ${errorField} is already registered.` });
    }
    const user = await User.create({ username, firstname, lastname, email, password });
    res.status(201).send({ message: 'User successfully registered.' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Server error' });
  }
});

sequelize.sync({ force: false }).then(() => {
  app.listen(3000, '0.0.0.0', () => {
    console.log('Server running on port 3000');
  });
});