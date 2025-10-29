let users = [];
let nextId = 1;

class UserModel {
  static findAll() {
    return users;
  }

  static findById(id) {
    return users.find(u => u.id === id);
  }

  static create(data) {
    const newUser = { id: nextId++, ...data };
    users.push(newUser);
    return newUser;
  }

  static update(id, data) {
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return null;
    users[index] = { ...users[index], ...data };
    return users[index];
  }

  static delete(id) {
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return false;
    users.splice(index, 1);
    return true;
  }
}

module.exports = UserModel;
