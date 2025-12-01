import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getObra } from '../../services/api';
import "./Details.css";

export default function Details() {
  const { id } = useParams();
  const [obra, setObra] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await getObra(id);
        setObra(res.data);
      } catch (err) {
        console.error(err);
        alert("Erro ao carregar detalhes.");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (!obra) return <p>Obra não encontrada.</p>;

  return (
    <div className="details-container">
      
      <div className="details-header">
        {obra.imagem && (
          <img
            src={obra.imagem}
            alt={obra.titulo}
            className="details-image"
          />
        )}

        <div className="details-info">
          <h2 className="details-title">{obra.titulo}</h2>

          <p className="details-meta">
            <strong>{obra.tipo}</strong> • {obra.genero || "—"} • {obra.ano || "—"}
          </p>

          <p><strong>Status:</strong> {obra.status}</p>
          <p><strong>Avaliação:</strong> {obra.avaliacao || '—'}</p>

            <div className="details-section">
        <p>{obra.descricao || "Sem descrição."}</p>
      </div>
        </div>
      </div>


      <div className="details-buttons">
        <Link to="/" className="btn-back">Voltar</Link>
        <Link to={`/edit/${obra._id}`} className="btn-edit">Editar</Link>
      </div>

    </div>
  );
}
