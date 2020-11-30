const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OffersSchema = new Schema({
  proyecto: {
    type: String,
    require: true,
  },
  descripcion: {
    type: String,
    require: true,
  },
  cupo: {
    type: Number,
    require: true,
  },
});

module.exports = {
  Post: mongoose.model("offers", OffersSchema),
};
