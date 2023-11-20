const mongoose = require("mongoose");

const reactionSchema = new mongoose.Schema({
    reactionId: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Schema.Types.ObjectId,
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
})

thoughtSchema.methods.getCreationDate = function () {
    const date = this.createdAt;
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); //adds 1 to value returne by .getMonth() because it is based on 0 index, converts it to a string, and then adds as many 0's as necessary to the start until string lenght is two characters... 1 => 02 (february)
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    return `${month}/${day}/${year}`;
}

thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
})

const Thought = mongoose.model("Thought", thoughtSchema)

module.exports = Thought;