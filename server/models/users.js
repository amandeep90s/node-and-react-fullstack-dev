const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    googleId: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
