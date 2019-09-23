const getData = (data, count) => {
  return data.slice(0, count);
};

const getUsers = (users, firstName) => {
  return firstName
    ? users.filter(user =>
        user.firstName.toLowerCase().includes(firstName.toLowerCase())
      )
    : users;
};

module.exports = {
  getData,
  getUsers
};
