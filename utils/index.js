const getData = (data, count) => {
  return data.slice(0, count);
};

const getUsers = (users, firstName) => {
  return users.filter(user =>
    user.firstName.toLowerCase().includes(firstName.toLowerCase())
  );
};

module.exports = {
  getData,
  getUsers
};
