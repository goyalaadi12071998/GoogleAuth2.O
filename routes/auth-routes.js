const { response } = require('express');
const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google',passport.authenticate('google',{
        scope: ['profile','email'],
        accessType: 'offline',
        prompt: 'consent'    
    }));

    app.get('/auth/google/callback',passport.authenticate('google'));

    app.get('/api/current_user',function(req,res){
        res.send(req.session);
    });

    app.get('/api/logout',async (req,res) => {
        req.logout();
        res.send(user);
    });
}