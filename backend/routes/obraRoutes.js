import express from "express";
import {
  listarObras,
  buscarObra,
  criarObra,
  editarObra,
  deletarObra
} from "../controllers/obras.controller.js";

const router = express.Router();

router.get("/", listarObras);
router.get("/:id", buscarObra);
router.post("/", criarObra);
router.put("/:id", editarObra);
router.delete("/:id", deletarObra);

export default router;
