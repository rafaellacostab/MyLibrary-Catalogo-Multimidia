import React from 'react';
import styles from './ObraForm.module.css';
import PropTypes from 'prop-types';

const FormContainer = ({ children }) => (
  <div className={styles.formWrapper}>
    {children}
  </div>
);

export default function ObraForm({formData, setFormData, onSubmit, editMode=false}){
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({...prev, [name]: value}));
  };

  return (
    <FormContainer> 
      <h2 className={styles.formTitle}>
        {editMode ? 'Editar obra' : 'Adicionar nova obra'}
      </h2>
      
      <form className={styles.form} onSubmit={onSubmit}>
        <label>Título
          <input name="titulo" value={formData.titulo} onChange={handleChange} required />
        </label>

        <label>Tipo
          <select name="tipo" value={formData.tipo} onChange={handleChange} required>
            <option value="Livro">Livro</option>
            <option value="Filme">Filme</option>
            <option value="Série">Série</option>
          </select>
        </label>

        <label>Autor / Diretor / Criador
          <input name="autor" value={formData.autor} onChange={handleChange} />
        </label>

        <label>Gênero
          <input name="genero" value={formData.genero} onChange={handleChange} />
        </label>

        <label>Ano
          <input name="ano" type="number" value={formData.ano} onChange={handleChange} />
        </label>

        <label>Status
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Quero assistir">Quero assistir</option>
            <option value="Quero ler">Quero ler</option>
            <option value="Já assisti">Já assisti</option>
            <option value="Já li">Já li</option>
            <option value="Assistindo">Assistindo</option>
            <option value="Lendo">Lendo</option>
          </select>
        </label>

        <label>Avaliação
          <select name="avaliacao" value={formData.avaliacao} onChange={handleChange}>
            <option value="">--</option>
            <option value="Amei">Amei</option>
            <option value="Gostei">Gostei</option>
            <option value="Neutro">Neutro</option>
            <option value="Não foi pra mim">Não foi pra mim</option>
            <option value="Abandonei">Abandonei</option>
          </select>
        </label>

        <label>URL da imagem (capa / pôster)
          <input name="imagem" value={formData.imagem} onChange={handleChange} />
        </label>

        <label>URL da imagem hover (ilustração alternativa ou GIF)
          <input name="hoverImagem" value={formData.hoverImagem} onChange={handleChange} />
        </label>

        <label>Descrição
          <textarea name="descricao" value={formData.descricao} onChange={handleChange} rows={4}></textarea>
        </label>

        <div className={styles.actions}>
          <button type="submit">{editMode ? 'Salvar alterações' : 'Adicionar obra'}</button>
        </div>
      </form>
    </FormContainer>
  );
}

ObraForm.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  editMode: PropTypes.bool,
};