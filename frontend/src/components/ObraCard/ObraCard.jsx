import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './ObraCard.module.css';
import { deleteObra } from '../../services/api';
import PropTypes from 'prop-types';

export default function ObraCard({obra, onDeleted}){
  const [src, setSrc] = useState(obra.imagem || '');
  const navigate = useNavigate();

  const handleDelete = async () => {
    if(!window.confirm('Confirma exclusão?')) return;
    try{
      await deleteObra(obra._id || obra.id);
      onDeleted && onDeleted();
    }catch(err){
      console.error(err);
      alert('Erro ao excluir.');
    }
  };

  const hoverSrc = obra.hoverImagem || obra.gif || '';

  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}
           onMouseEnter={() => hoverSrc && setSrc(hoverSrc)}
           onMouseLeave={() => setSrc(obra.imagem || '')}
           onClick={() => navigate(`/details/${obra._id || obra.id}`)}
      >
        <img src={src || 'https://via.placeholder.com/240x340?text=Sem+Capa'} alt={obra.titulo} />
      </div>
      <div className={styles.info}>
        <div>
          <h3>{obra.titulo}</h3>
          <p className={styles.meta}>{obra.tipo} • {obra.genero} • {obra.ano || '—'}</p>
          <p className={styles.status}>{obra.status}</p>
          <p className={styles.avaliacao}>{obra.avaliacao || '—'}</p>
        </div>
        <div className={styles.actions}>
          <Link to={`/edit/${obra._id || obra.id}`}>Editar</Link>
          <button onClick={handleDelete}>Excluir</button>
        </div>
      </div>
    </div>
  );
}

ObraCard.propTypes = {
  obra: PropTypes.object.isRequired,
  onDeleted: PropTypes.func,
};
