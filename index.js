const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./services/passport');
const app = express();

app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

const authRoutes = require('./routes/auth-routes');

function start() {
    mongoose.connect(keys.mongoURI,{
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Database Connected');
        //console.clear();
    }).catch((err) => {
        console.log(err);
    });    

    const PORT = process.env.PORT || 6500;

    app.listen(PORT,async () => {
        console.log('Server Started');
        //console.clear();
    });
}

authRoutes(app);

start();