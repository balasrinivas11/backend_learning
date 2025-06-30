const mongoose = require('mongoose');

const connect =mongoose.connect('mongodb://127.0.0.1:27017/backend_learning', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected ✅'))
.catch((err) => console.error('MongoDB Connection Error ❌:', err));
module.exports = connect;
