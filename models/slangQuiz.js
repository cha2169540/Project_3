const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const slangQuizSchema = new Schema(
    {
        language: { type: String, required: true },
        dialect: { type: String },
        questions: [
            {
                imageUrl: {
                    type: String
                },
                phrase: {
                    type: String
                },
                answerOptions: [{
                    type: String
                }],
                correctAnswer: {
                    type: String
                },
                explanation: {
                    type: String
                }
            }
        ]
    }
);

const SlangQuiz = mongoose.model("SlangQuiz", slangQuizSchema);

module.exports = SlangQuiz;
