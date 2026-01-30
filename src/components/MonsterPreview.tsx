// Componente semplice per far vedere l'anteprima
// Ho spostato qui la logica dell'URL così il form è più pulito

interface MonsterPreviewProps {
  name: string;
  species: string;
}

export const MonsterPreview = ({ name, species }: MonsterPreviewProps) => {
  
  // Se non c'è il nome, non mostro nulla
  if (!name) return null;

  // Logica per scegliere se mostrare umano o alieno
  const isHuman = species.toLowerCase() === 'human' || species.toLowerCase() === 'umano';
  
  // Scelgo il set di icone (set5 = umani, set2 = mostri)
  const setType = isHuman ? 'set5' : 'set2';
  
  // Costruisco l'URL
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