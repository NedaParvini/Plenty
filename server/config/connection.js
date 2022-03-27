const mongoose = require('mongoose');

mongoose.connect(
<<<<<<< HEAD
  process.env.MONGODB_URI || 'mongodb://127.0.0.1/plenty',
=======
  process.env.MONGODB_URI,
>>>>>>> origin/develop
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

module.exports = mongoose.connection;