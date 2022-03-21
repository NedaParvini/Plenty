const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/plenty' || "mongodb+srv://analuciarojas:Photography0919@cluster0.z4ftm.mongodb.net/plenty?retryWrites=true&w=majority",
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

module.exports = mongoose.connection;