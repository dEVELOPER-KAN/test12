const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2');

passport.use(new GoogleStrategy(
    {
        clientID: process.env.G_CLIENT_ID,
        clientSecret: process.env.G_CLIENT_SECRET,
        callbackURL: 'http://localhost:3000/oauth2/redirect/google',
        passReqToCallback: true
    },
    function (request, accessToken, refreshToken, profile, done) {
        // User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //   return done(err, user);
        // });
        return done("err", null)
    }
))