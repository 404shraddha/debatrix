const mongoose = require("mongoose");
const debateModel = mongoose.Schema({
  _id: ObjectId,
  topic: String, // Debate topic
  participant1: ObjectId, // User ID of participant 1
  participant2: ObjectId, // User ID of participant 2
  stakeAmount: Number, // Staked SOL tokens
  winner: ObjectId, // User ID of the winner (AI-chosen)
  aiDecision: String, // AI judgment summary
  resultOnChain: Boolean, // True if result is recorded on-chain
  createdAt: Date,
  updatedAt: Date,
});
const Debate = mongoose.model("Debate", debateModel);
module.exports = Debate;
