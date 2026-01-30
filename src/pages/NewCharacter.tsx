import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCharacter } from '../api/characterApi';
import { useNavigate } from 'react-router-dom';
import { MonsterPreview } from '../components/MonsterPreview'; // Importo i miei componenti
import { FormGroup } from '../components/FormGroup';

const NewCharacter = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [datiForm, setDatiForm] = useState({
    name: '',
    status: 'Alive',
    species: 'Alien',
    gender: 'unknown'
  });

  const mutation = useMutation({
    mutationFn: createCharacter,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['characters'] });
      alert('Creatura generata con successo! (Temporanea)');
      navigate('/characters');
    },
    onError: () => {
      alert("Errore durante la clonazione...");
    }
  });

  const gestisciCambio = (e: any) => {
    setDatiForm({ ...datiForm, [e.target.name]: e.target.value });
  };

  const inviaForm = (e: React.FormEvent) => {
    e.preventDefault();

    const isHuman = datiForm.species === 'Human';
    const setType = isHuman ? 'set5' : 'set2';
    const finalImage = `https://robohash.org/${datiForm.name}?set=${setType}&bg=bg1&size=300x300`;

    const nuovoPersonaggio = {
      ...datiForm,
      image: finalImage,
      type: 'Experiment',
      origin: { name: 'Laboratorio', url: '' },
      location: { name: 'Ignoto', url: '' },
      gender: datiForm.gender as any
    };

    console.log("Invio dati:", nuovoPersonaggio);
    mutation.mutate(nuovoPersonaggio as any);
  };

  return (
    <div className="container">
      <h1>Generatore di Personaggi</h1>
      <p style={{ color: '#ccc' }}>Compila il modulo per creare una nuova forma di vita.</p>

      <div className="card form-container">
        <form onSubmit={inviaForm}>

          <FormGroup label="Nome in codice:">
            <input
              className="form-input"
              type="text"
              name="name"
              value={datiForm.name}
              onChange={gestisciCambio}
              required
              placeholder="Es. Krombopulos..."
            />
          </FormGroup>

          <FormGroup label="Specie:">
            <select
              className="form-select"
              name="species"
              value={datiForm.species}
              onChange={gestisciCambio}
            >
              <option value="Alien">Alieno (Mostruoso)</option>
              <option value="Human">Umano (Guerriero)</option>
              <option value="Robot">Robot</option>
            </select>
          </FormGroup>

          <FormGroup label="Stato Vitale:">
            <select
              className="form-select"
              name="status"
              value={datiForm.status}
              onChange={gestisciCambio}
            >
              <option value="Alive">Vivo</option>
              <option value="Dead">Deceduto</option>
              <option value="unknown">Sconosciuto</option>
            </select>
          </FormGroup>

          <MonsterPreview name={datiForm.name} species={datiForm.species} />

          <button
            type="submit"
            disabled={mutation.isPending || !datiForm.name}
            style={{ width: '100%', padding: '15px', marginTop: '10px' }}
          >
            {mutation.isPending ? 'Elaborazione DNA...' : 'GENERA ORA'}
          </button>

        </form>
      </div>
    </div>
  );
};

export default NewCharacter;