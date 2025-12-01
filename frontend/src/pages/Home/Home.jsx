import React, {useEffect, useState} from 'react';
import { getObras } from '../../services/api';
import ObraCard from '../../components/ObraCard/ObraCard';
import styles from './Home.module.css';

const HomeContainer = ({ children }) => (
  <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', paddingTop: '40px', paddingBottom: '40px' }}>
    {children}
  </div>
);

export default function Home(){

  const [obras, setObras] = useState([]);
  const [filter, setFilter] = useState('Todos');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const fetch = async () => {
    setLoading(true);
    try{
      const res = await getObras();
      setObras(res.data || []);
    }catch(err){
      console.error(err);
      alert('Erro ao buscar obras. Verifique se o back-end está rodando.');
    }finally{
      setLoading(false);
    }
  };

  useEffect(()=>{fetch()},[]);

  const filtered = obras.filter(o => {
    if(filter !== 'Todos' && o.tipo !== filter) return false;
    if(query && !o.titulo.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });

  return (
    <HomeContainer> 
      <h2 className={styles.catalogoTitle}>Catálogo</h2>

      <div className={styles.controls}>
        <div>
          <button onClick={() => setFilter('Todos')} className={filter==='Todos'?styles.active:''}>Todos</button>
          <button onClick={() => setFilter('Livro')} className={filter==='Livro'?styles.active:''}>Livros</button>
          <button onClick={() => setFilter('Filme')} className={filter==='Filme'?styles.active:''}>Filmes</button>
          <button onClick={() => setFilter('Série')} className={filter==='Série'?styles.active:''}>Séries</button>
        </div>
        <input placeholder="Buscar por título" value={query} onChange={(e)=>setQuery(e.target.value)} />
      </div>

      {loading ? <p>Carregando...</p> : (
        <div className={styles.grid}>
          {filtered.length === 0 && <p>Nenhuma obra encontrada.</p>}
          {filtered.map(o => (
            <ObraCard key={o._id || o.id} obra={o} onDeleted={fetch} />
          ))}
        </div>
      )}
    </HomeContainer>
  );
}