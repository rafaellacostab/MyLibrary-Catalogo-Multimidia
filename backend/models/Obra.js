import mongoose from "mongoose";

const ObraSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  tipo: { type: String, enum: ["Livro","Filme","Série"], default: "Livro" },
  autor: { type: String, default: "" },      
  genero: { type: String, default: "" },
  ano: { type: Number, default: null },
  status: { type: String, default: "Quero ver/ler" }, 
  avaliacao: { type: String, default: "" },    
  imagem: { type: String, default: "" },       
  hoverImagem: { type: String, default: "" },  
  descricao: { type: String, default: "" },
}, { timestamps: true });

export default mongoose.model("Obra", ObraSchema);
