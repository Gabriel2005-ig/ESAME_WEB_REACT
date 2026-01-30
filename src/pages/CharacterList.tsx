import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../api/characterApi';
import { Card } from '../components/Card';

const CharacterList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['characters'],
    queryFn: fetchCharacters,
  });

  if (isLoading) return <div className="container"><h1>Caricamento...</h1></div>;
  if (isError) return <div className="container"><h1 style={{color: 'red'}}>Errore caricamento dati!</h1></div>;

  return (
    <div className="container">
      <h1>Personaggi Rick & Morty</h1>
      
      <div className="grid-container">
        {data?.map((char) => (
          <Card key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;