const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/NBTV`,
    {
        userNewURlParser: true,
        useUnifedTopologu: true,
    }
);

module.exports = mongoose.connection;