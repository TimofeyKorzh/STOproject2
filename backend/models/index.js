const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

const sequelize = new Sequelize('db', 'admin', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
});

const User = sequelize.define('User', {
  username: { type: Sequelize.STRING, allowNull: false, unique: true },
  firstname: { type: Sequelize.STRING, allowNull: false },
  lastname: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false, unique: true },
  password: { type: Sequelize.STRING, allowNull: false }
});


// Это метод модели
User.sync().then(async () => {
  const bcrypt = require('bcrypt');
  const saltRounds = 10;

  bcrypt.hash('yourpassword', saltRounds, async function(err, hash) {
    await User.findOrCreate({where: {username: 'admin'}, defaults: {password: hash, email: 'admin@example.com', firstname: 'Admin', lastname: 'Admin'}});
  });
})

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
});

module.exports = { sequelize, User };
