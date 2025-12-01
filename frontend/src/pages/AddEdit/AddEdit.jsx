import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ObraForm from "../../components/ObraForm/ObraForm.jsx";
import { createObra, getObra, updateObra } from '../../services/api';

export default function AddEdit(){
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    titulo: '', tipo: 'Livro', autor: '', genero: '', ano: '', status: 'Quero assistir', avaliacao: '', imagem: '', hoverImagem: '', descricao: ''
  });

  useEffect(()=>{
    if(id){
      (async ()=>{
        try{
          const res = await getObra(id);
          setFormData(res.data || {});
        }catch(err){
          console.error(err);
          alert('Erro ao carregar a obra.');
        }
      })();
    }
  },[id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      if(id) await updateObra(id, formData);
      else await createObra(formData);
      navigate('/');
    }catch(err){
      console.error(err);
      alert('Erro ao salvar.');
    }
  };

  return (
    <div>
      <ObraForm formData={formData} setFormData={setFormData} onSubmit={handleSubmit} editMode={!!id} />
    </div>
  );
}
