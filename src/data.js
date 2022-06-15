const users = [
  {
    id: 1,
    username: "Admin",
    bio: "Admin data",
  },
  {
    id: 2,
    username: "Moderator",
    bio: "Moderator data",
  },
];

const getUserById = (id) => {
  return users.find((item) => item.id === +id);
};

export { users, getUserById };
