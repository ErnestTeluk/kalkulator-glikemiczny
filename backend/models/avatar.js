const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const avatarSchema = new Schema({
    userID: { type: String, unique: true, required: true },
    avatar: { type: String, required: true },
});

const ModelClass = mongoose.model('avatar', avatarSchema);
module.exports = ModelClass;