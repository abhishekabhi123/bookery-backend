const mongoose = require("mongoose");

const enqSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Submiteed",
    enum: ["Submitted", "Contacted", "In progress"],
  },
});

module.exports = mongoose.model("Enquiry", enqSchema);
