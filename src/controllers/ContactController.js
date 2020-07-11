const ContactModel = require("../models/ContactModel");

class ContactController {
  getContacts = (_, res) => {
    ContactModel.find({})
      .sort("created_at")
      .exec((error, contacts) => {
        if (error || !contacts) {
          return res.status(404).json({ message: "Contact items not found" });
        }
        return res.status(200).json(contacts);
      });
  };

  ifItemNotExist = (item, action) => {
    ContactModel.find({ contact: item.contact }, (error, result) => {
      if (error || !result || result.length === 0) {
        return action();
      }
    });
  };

  addContact = (contact) => {
    const newContact = new ContactModel(contact);
    newContact.save();
  };
}

module.exports = ContactController;
