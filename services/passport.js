const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const User = require('../models/user-model');

passport.serializeUser((user,done) => {
    console.log(user);
    done(null,user._id)
});

passport.deserializeUser((id,done) => {
    User.findOne({id},function(err,user){
        done(null,user);
    });
})

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, async (accessToken,refreshToken,profile,done) => {
        
        const user = await User.findOne({googleId: profile.id});
        if(!user){
            const newUser = await new User({
                googleId: profile.id
            }).save();
            done(null,newUser);
        }else{
            done(null,user);
        }
    })
);
