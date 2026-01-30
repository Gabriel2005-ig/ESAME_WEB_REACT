import { Link } from 'react-router-dom';
import type { Character } from '../types/Character';

interface CardProps {
  character: Character;
}

export const Card = ({ character }: CardProps) => {
  return (
    <div className="card">
      <Link
        to={`/character/${character.id}`}
        state={{ charDati: character }}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <img src={character.image} alt={character.name} className="card-img" />

        <div style={{ padding: '10px' }}>
          <h3>{character.name}</h3>
          <p>{character.status} - {character.species}</p>
        </div>

        <div style={{ marginTop: '10px', color: '#646cff', fontWeight: 'bold' }}>
          Vedi Dettagli
        </div>
      </Link>
    </div>
  );
};