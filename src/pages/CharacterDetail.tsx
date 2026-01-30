import { useQuery } from '@tanstack/react-query';
import { useParams, Link, useLocation } from 'react-router-dom';
import { fetchCharacterById } from '../api/characterApi';

const CharacterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  
  const datiDaState = location.state?.charDati;

  const { data: dataApi, isLoading, isError } = useQuery({
    queryKey: ['character', id],
    queryFn: () => fetchCharacterById(id!),
    enabled: !datiDaState && !!id,
  });

  const character = datiDaState || dataApi;

  if (isLoading && !character) return <h1>Sto caricando...</h1>;
  if (isError) return <h1 style={{ color: 'red' }}>Errore: non trovato</h1>;

  return (
    <div className="card" style={{ maxWidth: '500px', margin: '20px auto' }}>
      <Link to="/characters" style={{ display: 'block', marginBottom: '15px' }}>
        ⬅ Indietro
      </Link>

      {character && (
        <>
          <img 
            src={character.image} 
            alt={character.name} 
            style={{ width: '100%', borderRadius: '10px' }} 
          />
          
          <h1>{character.name}</h1>
          
          <div style={{ textAlign: 'left', marginTop: '10px' }}>
            <p><strong>Stato:</strong> {character.status}</p>
            <p><strong>Specie:</strong> {character.species}</p>
            <p><strong>Genere:</strong> {character.gender}</p>
            <small style={{color: '#999'}}>
                (Dati caricati da: {datiDaState ? 'State interno (Navigazione)' : 'API (Fetch)'})
            </small>
          </div>
        </>
      )}
    </div>
  );
};

export default CharacterDetail;