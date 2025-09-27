import dotenv from "dotenv";
dotenv.config();

import connectDB from "./src/db/database.js";
import userRepository from "./src/repositories/userRepository.js";

await connectDB();

const exists = await userRepository.findByEmail("rafael.garcia.c@tecsup.edu.pe");
if (!exists) {
    const nuevoUsuario = await userRepository.create({
        name: "Rafael",
        lastName: "Garcia",
        email: "rafael.garcia.c@tecsup.edu.pe",
        age: 18,
        phoneNumber: "958182373",
        password: "rafael129",
        createdAt: new Date()
    });
    console.log("Usuario creado:", nuevoUsuario);
} else {
    console.log("El usuario ya existe:", exists);
}

process.exit();
