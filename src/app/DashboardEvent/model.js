const mongoose = require('mongoose');
const participantModel = require('../Participant/model');

const eventSchema = new mongoose.Schema({
  themeName: {
    type: String,
    required: true,
  },
  imagePoster: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  eventStart: {
    type: Date,
    required: true,
  },
  eventEnd: {
    type: Date,
    required: true,
  },
  speakerName: {
    type: String,
    required: true,
  },
  isOnlyTelkom: {
    type: Boolean,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  linkLocation: {
    type: String,
  },
  endRegistration: {
    type: Date,
    required: true,
  },
  ticketLimit: {
    type: Number,
    required: true,
  },
  note: {
    type: String,
  },
  participant: [participantModel],
});

const model = mongoose.model('Event', eventSchema);

module.exports = model;
