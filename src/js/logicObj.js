const obj = {
  users: [],

  addAllUsers(arrayUsers) {
    this.users = arrayUsers;
  },

  // ПЛОХО
  // addAllUsers: arrayUsers => {
  //   // this = users;
  //   // this.users = arrayUsers;

  //   // obj.users = arrayUsers;
  // },

  addNewUser(userNew) {
    this.users = [...this.users, userNew];
  },

  changeUser({ id, name }) {
    console.log(id);
    console.log(name);
    this.users = this.users.map(user =>
      user.id === id ? { ...user, name: name } : user,
    );
  },
};

export default obj;
