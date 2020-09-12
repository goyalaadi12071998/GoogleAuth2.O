const express = require('express');
require('./services/passport');
const app = express();
const authRoutes = require('./routes/auth-routes');

authRoutes(app);

const PORT = process.env.PORT || 6500;

app.listen(PORT,async () => {
    console.log('Server Started');
    console.clear();
});

