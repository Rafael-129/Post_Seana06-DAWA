import express from "express";
import postRepository from "../repositories/postRepository.js";
import userRepository from "../repositories/userRepository.js";
const router = express.Router();

// Listar todos los posts
router.get("/", async (req, res) => {
    const posts = await postRepository.findAll();
    res.render("posts/list", { posts });
});

// Formulario para nuevo post
router.get("/new", async (req, res) => {
    const users = await userRepository.findAll();
    res.render("posts/new", { users });
});

// Crear post
router.post("/", async (req, res) => {
    // hashtags como array si vienen como string
    if (req.body.hashtags) {
        req.body.hashtags = req.body.hashtags.split(",").map(h => h.trim());
    }
    await postRepository.create(req.body);
    res.redirect("/posts");
});

// Formulario para editar post
router.get("/:id/edit", async (req, res) => {
    const post = await postRepository.findById(req.params.id);
    res.render("posts/edit", { post });
});

// Actualizar post
router.post("/:id", async (req, res) => {
    if (req.body.hashtags) {
        req.body.hashtags = req.body.hashtags.split(",").map(h => h.trim());
    }
    await postRepository.update(req.params.id, req.body);
    res.redirect("/posts");
});

// Eliminar post
router.post("/:id/delete", async (req, res) => {
    await postRepository.deletePost(req.params.id);
    res.redirect("/posts");
});

export default router;

