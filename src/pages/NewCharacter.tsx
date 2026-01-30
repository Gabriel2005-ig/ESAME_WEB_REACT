import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createCharacter } from '../api/characterApi';
import { useNavigate } from 'react-router-dom';

const NewCharacter = () => {
  const navigate = useNavigate();
  
  // Stato del form
  const [datiForm, setDatiForm] = useState({
    name: '',
    status: 'Alive',
    species: 'Human',
    image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg'
  });

  const mutation = useMutation({
    mutationFn: createCharacter,
    onSuccess: (data) => {
      console.log("Risposta server:", data);
      alert('Tutto ok! Personaggio creato (finto).');
      navigate('/characters');
    },
    onError: (err) => {
      console.error(err);
      alert("Errore!!!");
    }
  });

  const gestisciCambio = (e: any) => {
    // Aggiorno lo stato copiando quello vecchio
    setDatiForm({ ...datiForm, [e.target.name]: e.target.value });
  };

  const inviaForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Invio i dati:", datiForm);
    mutation.mutate(datiForm);
  };

  return (
    <div className="container">
      <h1>Aggiungi Personaggio</h1>
      
      <div className="card" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <form onSubmit={inviaForm} style={{ display: 'flex', flexDirection: 'column', gap: '15px', padding: '10px' }}>
          
          <div>
            <label>Nome:</label> <br/>
            <input 
              type="text" 
              name="name" 
              value={datiForm.name} 
              onChange={gestisciCambio} 
              required 
              style={{ width: '90%', padding: '5px' }}
            />
          </div>

          <div>
            <label>Specie:</label> <br/>
            <input 
              type="text" 
              name="species" 
              value={datiForm.species} 
              onChange={gestisciCambio} 
              required 
              style={{ width: '90%', padding: '5px' }}
            />
          </div>

          <div>
            <label>Stato:</label> <br/>
            <select 
              name="status" 
              value={datiForm.status} 
              onChange={gestisciCambio}
              style={{ width: '95%', padding: '5px' }}
            >
              <option value="Alive">Vivo</option>
              <option value="Dead">Morto</option>
              <option value="unknown">Boh</option>
            </select>
          </div>

          <button 
            type="submit" 
            disabled={mutation.isPending}
            style={{ marginTop: '10px', backgroundColor: '#646cff', color: 'white', border: 'none', padding: '10px' }}
          >
            {mutation.isPending ? 'Sto inviando...' : 'CREA'}
          </button>
        
        </form>
      </div>
    </div>
  );
};

export default NewCharacter;