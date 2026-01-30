
interface MonsterPreviewProps {
  name: string;
  species: string;
}

export const MonsterPreview = ({ name, species }: MonsterPreviewProps) => {


  if (!name) return null;


  const isHuman = species.toLowerCase() === 'human' || species.toLowerCase() === 'umano';


  const setType = isHuman ? 'set5' : 'set2';


  const imageUrl = `https://robohash.org/${name}?set=${setType}&bg=bg1&size=300x300`;

  return (
    <div className="monster-preview-box">
      <span style={{ fontSize: '0.9em', color: '#aaa' }}>
        Anteprima DNA ({species}):
      </span>
      <br />

      <img
        src={imageUrl}
        alt="Anteprima Mostro"
        className={`monster-img ${isHuman ? 'border-human' : 'border-alien'}`}
      />
    </div>
  );
};