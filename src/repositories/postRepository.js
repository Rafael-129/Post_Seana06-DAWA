import Post from "../models/post.js";

class PostRepository {
    async create(data) {
        const post = new Post({
            title: data.title,
            content: data.content,
            hashtags: data.hashtags,
            imageUrl: data.imageUrl,
            createdAt: new Date(),
            updatedAt: new Date(),
            user: data.user
        });
        return await post.save();
    }

    async findAll() {
        return await Post.find().populate("user");
    }

    async findById(id) {
        return await Post.findById(id).populate("user");
    }

    async update(id, data) {
        return await Post.findByIdAndUpdate(
            id,
            { ...data, updatedAt: new Date() },
            { new: true }
        );
    }

    async deletePost(id) {
        return await Post.findByIdAndDelete(id);
    }
}

export default new PostRepository();



