const OutlookStrategy = require('passport-outlook').Strategy;
const User = require('../models/user');

const OUTLOOK_CLIENT_ID = '9978f3c9-0d51-453e-bd05-947e7558f3c8';
const OUTLOOK_CLIENT_SECRET = 'VposeSie24_U.-3m2Q1EC2CiI.5p.hD2-.';

module.exports = (passport) => {
    passport.use(new OutlookStrategy({
        callbackURL: 'http://localhost:8080/aiwc/admin/login/outlook/redirect',
        clientID: OUTLOOK_CLIENT_ID,
        clientSecret: OUTLOOK_CLIENT_SECRET,
    }, (accessToken, refreshToken, profile, done) => {
        User.findOne({ outlookId: profile.id })
            .then((currentUser) => {
                if (currentUser) {
                    done(null, currentUser);
                } else {
                    new User({
                        outlookId: profile.id,
                        name: profile.DisplayName,
                        email: profile.EmailAddress
                    }).save().then((newUser) => {
                        done(null, newUser);
                    });

                }
            });
    }));
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    passport.deserializeUser((id, done) => {
        User.findById(id).then((user) => {
            done(null, user.id);
        });
    });
};