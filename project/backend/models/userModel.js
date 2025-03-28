const mongoose = require("mongoose");
const userModel = mongoose.Schema({
  _id: ObjectId, // Unique ID for MongoDB
  walletAddress: String, // Connected Solana wallet address
  username: String, // User's display name
  debatesParticipated: Number, // Total debates joined
  debatesWon: Number, // Total debates won
  reputationScore: Number, // Reputation points based on wins
  createdAt: Date,
  updatedAt: Date,
});
const User = mongoose.Model("User", userModel);
module.exports = User;
