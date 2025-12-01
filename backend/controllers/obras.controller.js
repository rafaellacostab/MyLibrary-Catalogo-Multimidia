import Obra from "../models/Obra.js";

export const listarObras = async (req, res) => {
  try {
    const obras = await Obra.find().sort({ createdAt: -1 });
    res.status(200).json(obras);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao listar obras" });
  }
};

export const buscarObra = async (req, res) => {
  try {
    const { id } = req.params;
    const obra = await Obra.findById(id);
    if (!obra) return res.status(404).json({ error: "Obra não encontrada" });
    res.status(200).json(obra);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar obra" });
  }
};

export const criarObra = async (req, res) => {
  try {
    const novo = await Obra.create(req.body);
    res.status(201).json(novo);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Erro ao criar obra", details: err.message });
  }
};

export const editarObra = async (req, res) => {
  try {
    const { id } = req.params;
    const atualizado = await Obra.findByIdAndUpdate(id, req.body, { new: true });
    if (!atualizado) return res.status(404).json({ error: "Obra não encontrada" });
    res.status(200).json(atualizado);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Erro ao editar obra", details: err.message });
  }
};

export const deletarObra = async (req, res) => {
  try {
    const { id } = req.params;
    await Obra.findByIdAndDelete(id);
    res.status(200).json({ mensagem: "Obra removida com sucesso" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao deletar obra" });
  }
};
