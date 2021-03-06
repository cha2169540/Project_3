const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const daysPresSchema = new Schema(
    {
      language: {
        type: String
      },
      content: {
        imageUrl: {
          type: String
        },
        targetWord: {
          type: String
        },
        audioToPlay: {
          type: String
        },
        explanation: {
          type: String
        }
      }
    }
  )
  

const DaysPres = mongoose.model("DaysPres", daysPresSchema);

module.exports = DaysPres;