const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ContactSchema = new Schema(
  {
    iconId: String,
    contact: String,
    href: String,
  },
  { timestamps: { createdAt: "created_ad" } }
);

const ContactModel = mongoose.model("Contact", ContactSchema);

module.exports = ContactModel;
