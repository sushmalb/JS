const registerUser = (req, res) => {
  const userName = req.body.name;
  const password = req.body.password;
  const email = req.body.email;

  res.json({
    // name: "test",
    // email: "test@example.com",
    success: true,
    name: userName,
    password: password,
    email: email,
  });
};

module.exports = registerUser;
