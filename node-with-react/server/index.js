require('./services/passport');

const express = require('express');
const app = express();

require('./routes/auth')(app);

app.listen(process.env.PORT);
