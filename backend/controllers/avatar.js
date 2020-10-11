const Avatar = require('../models/avatar');

exports.CreateAvatar = function (req, res) {
    const avatar = new Avatar({
        userID: req.body.userID,
        avatar: req.file.path,
    });

    avatar
        .save()
        .then(avatar => res.status(200).send({ status: 'avatar upload successfully' }))
        .catch(err => {
            res.status(400).send({ status: `error message: ${err}` })
        })
};

exports.FetchAvatar = function (req, res) {
    let id = req.params.id;
    Avatar.findOne({ userID: id }, function (err, avatar) {
        if (err) {
            res.json(err)
        } else {
            res.json(avatar);
        }
    });
};

exports.UpdateAvatar = function (req, res) {
    const id = req.params.id;
    const avatarProps = req.file.path;
    Avatar.findOneAndUpdate({ userID: id }, { avatar: avatarProps })
        .then(info => {
            res.status(200).send({ status: "avatar update successfully" });
        })
        .catch(err => {
            res.status(400).send({ status: `error message: ${err}` });
        });
};