const mongoose = require("mongoose");

const newTopic = mongoose.Schema({
  topic: {
    type: String,
  },
});

const TopicModel = mongoose.model("TopicModel", newTopic);
module.exports = TopicModel;
