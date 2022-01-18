require('../Auth/GoogleStrategy');
const passport = require('passport');
const Router = require('express').Router();
Router
    .get("/", (Request, Response, next) => {
        Response.render(`login`);
    })
    .get('/google', passport.authenticate('google', {
        scope:
            ['email']
    }))
    .get('/redirect/google',
        passport.authenticate('google', { failureRedirect: '/login', successRedirect: '/' }));
        
module.exports = Router;