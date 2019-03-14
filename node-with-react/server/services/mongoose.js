const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true });

require('../models/User');
