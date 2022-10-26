const usersCtrl = {};

usersCtrl.getUsers = (req, res) => res.json({ message: ['GET - Users routes'] })
usersCtrl.createUser = (req, res) => res.send('POST - Users routes')

usersCtrl.getUser = (req, res) => res.json({ message: 'GET - User routes' })
usersCtrl.updateUser = (req, res) => res.json({ message: 'PUT - User routes' })
usersCtrl.deleteUser = (req, res) => res.json({ message: 'DELETE - User routes' })

module.exports = usersCtrl;