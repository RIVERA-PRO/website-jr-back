import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    user_id: { type: mongoose.Types.ObjectId, required: true, ref: 'users' },
    text: { type: String, required: true },
}, { timestamps: true });


const Comment = mongoose.model('comment', commentSchema);

export default Comment
