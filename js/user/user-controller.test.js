const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
});

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
});
//una prueba para la función add() 
test('add user to userController', () => {    
  let user = new User(4567,"Daniela", "daniela@generation.org");
  userController.add(user);    
  expect(userController.getUsers()).toContain(user);
});
//una prueba para la función remove()
test('remove user to userController', () => {    
  let user = new User(4567,"Daniela", "daniela@generation.org");
  userController.add(user);    
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});
// dos pruebas unitarias para la función findByEmail()
test('find user into userController', () => {    
  let user = new User(2345,"Dani", "dani@generation.org");
  userController.add(user); 
  userController.findByEmail(user);
  expect(userController.getUsers()).toContain(user);
});
test('find user into userController', () => {    
  let user = new User(6789,"Jhonathan", "jhonathan@generation.org");
  userController.add(user); 
  userController.findByEmail(user);
  expect(userController.getUsers()).toContain(user);
});
//dos pruebas unitarias para la función findById().
test('find user into userController', () => {    
  let user = new User(7654,"Carlos", "carlos@generation.org");
  userController.add(user); 
  userController.findById(user);
  expect(userController.getUsers()).toContain(user);
});
test('find user into userController', () => {    
  let user = new User(9843,"David", "david@generation.org");
  userController.add(user); 
  userController.findById(user);
  expect(userController.getUsers()).toContain(user);
});
