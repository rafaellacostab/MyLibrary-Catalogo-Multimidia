import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import obraRoutes from "./routes/obraRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/obras", obraRoutes);

mongoose.connect("mongodb://localhost:27017/MyLibrary", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB conectado"))
.catch(err => console.error(err));

const PORT = 5000;
app.listen(PORT, () => console.log("Servidor rodando porta " + PORT));