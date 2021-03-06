const jwt = require('jwt-simple');

const User = require('../models/user');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode(
    { sub: user.id, ait: timestamp },
    process.env.JWT_TOKEN_SECRET
  );
}

exports.SignIn = function (req, res, next) {
  res.send({ token: tokenForUser(req.user) });
};

exports.SignUp = function (req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  if (!email || !password || !name) {
    return res.status(422).send({ error: 'You must provide all details' });
  }

  User.findOne({ email: email }, function (err, existingUser) {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    const user = new User({
      email: email,
      password: password,
      name: name,
    });

    user.save(function (err) {
      if (err) {
        return next(err);
      }

      res.json({ token: tokenForUser(user) });
    });
  });
};

exports.FetchUserData = function (req, res) {
  let id = req.params.id;
  User.findOne({ _id: id }, function (err, data) {
    if (err) {
      res.json(err)
    } else {
      const userData = { _id: data._id, name: data.name }
      res.json(userData);
    }
  });
};