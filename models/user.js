const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    outlookId: String,
    name: String,
    email: String,
    accessToken: { type: String, required: true,select: false },
    isAdmin: { type: Boolean, default: false }
});

const User = mongoose.model('User', UserSchema);
module.exports = mongoose.model('User', UserSchema);