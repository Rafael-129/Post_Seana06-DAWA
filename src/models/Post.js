import mongoose from "mongoose";
import "./user.js"; // Importa el modelo User para evitar MissingSchemaError

const postSchema = new mongoose.Schema({
    title: { type: String, minlength: 5, maxlength: 30, required: true },
    content: { type: String, minlength: 10, required: true },
    hashtags: [{ type: String }],
    imageUrl: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

export default mongoose.model("Post", postSchema);
