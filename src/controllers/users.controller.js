const usersCtrl = {};

const User = require('../models/User');

usersCtrl.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users)
};

usersCtrl.createUser = async (req, res) => {
  const { username } = req.body;
  const newUser = new User({ username });
  await newUser.save();
  res.send('POST - Users routes')
};
usersCtrl.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json({ message: 'GET - User routes' })
};
usersCtrl.updateUser = async (req, res) => {
  const { username } = req.body;
  const user = await User.findOneAndUpdate({ _id: req.params.id },{ username });
  res.json({ message: 'PUT - User routes' })
};
usersCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'DELETE - User routes' })
};

module.exports = usersCtrl;