const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addSchema = new Schema({
    answers: [String],
    author:{
		type: Schema.Types.ObjectId,
		ref: "Users"
	},
    time: Number,
    endTime: Number
})

module.exports = mongoose.model('Answer', addSchema);