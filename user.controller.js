const UserModel = require('../models/user.model');

// Obtener todos los usuarios
exports.getAllUsers = (req, res) => {
  res.json(UserModel.findAll());
};

// Obtener usuario por ID
exports.getUserById = (req, res) => {
  const user = UserModel.findById(parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
  res.json(user);
};

// Crear nuevo usuario
exports.createUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ message: 'Datos inválidos' });
  const newUser = UserModel.create({ name, email });
  res.status(201).json(newUser);
};

// Actualizar usuario
exports.updateUser = (req, res) => {
  const { name, email } = req.body;
  const updated = UserModel.update(parseInt(req.params.id), { name, email });
  if (!updated) return res.status(404).json({ message: 'Usuario no encontrado' });
  res.json(updated);
};

// Eliminar usuario
exports.deleteUser = (req, res) => {
  const deleted = UserModel.delete(parseInt(req.params.id));
  if (!deleted) return res.status(404).json({ message: 'Usuario no encontrado' });
  res.status(204).send();
};
