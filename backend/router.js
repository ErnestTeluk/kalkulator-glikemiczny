const passport = require('passport');
const multer = require('multer');

const Authentication = require('./controllers/authentication');
const Avatar = require('./controllers/avatar');
const passportService = require('./services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + '-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error('wrong file type'), false);
  }
};

const upload = multer({
  storage: storage, limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter
});

module.exports = function (app) {
  app.post('/api/v1/signin', requireSignin, Authentication.signin);
  app.post('/api/v1/signup', Authentication.signup);
  app.post('/api/v1/createavatar', upload.single('avatar'), requireAuth, Avatar.CreateAvatar);
  app.get('/api/v1/fetchavatar/:id', requireAuth, Avatar.FetchAvatar);
  app.patch('/api/v1/updateavatar/:id', upload.single('avatar'), requireAuth, Avatar.UpdateAvatar);
};
