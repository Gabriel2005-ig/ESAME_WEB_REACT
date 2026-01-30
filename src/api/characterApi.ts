import type { Character } from '../types/Character';

// Interfaccia per la risposta dell'API di Rick and Morty
// Uso T perché è generica (come spiegato a lezione)
interface ApiResponse<T> {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: T[];
}

export const fetchCharacters = async (): Promise<Character[]> => {
  console.log("Inizio fetch personaggi..."); // debug
  
  const res = await fetch('https://rickandmortyapi.com/api/character');
  
  if (!res.ok) {
    throw new Error('Errore chiamata API');
  }

  const data: ApiResponse<Character> = await res.json();
  console.log("Dati scaricati:", data.results.length);
  
  return data.results; 
};

export const fetchCharacterById = async (id: string): Promise<Character> => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  if (!res.ok) throw new Error('Errore caricamento singolo');
  return res.json();
};

export const createCharacter = async (newCharacter: any) => {
  // Uso any perché tanto è un mock
  console.log("Provo a creare:", newCharacter);
  
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(newCharacter),
  });
  
  if (!res.ok) throw new Error("Errore invio dati");
  return res.json();
};