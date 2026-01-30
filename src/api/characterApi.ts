import type { Character } from '../types/Character';

interface ApiResponse<T> {
  info: any;
  results: T[];
}

let personaggiSessione: Character[] = [];

export const fetchCharacters = async (): Promise<Character[]> => {
  console.log("Scarico lista (API + Nuovi inseriti)...");
  
  const res = await fetch('https://rickandmortyapi.com/api/character');
  if (!res.ok) throw new Error('Errore API');
  
  const data: ApiResponse<Character> = await res.json();
  
  return [...personaggiSessione, ...data.results]; 
};

export const fetchCharacterById = async (id: string): Promise<Character> => {
  const trovatoInMemoria = personaggiSessione.find(c => c.id.toString() === id);

  if (trovatoInMemoria) {
    console.log("Trovato nella memoria sessione:", trovatoInMemoria.name);
    return trovatoInMemoria;
  }

  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  if (!res.ok) throw new Error('Non trovato neanche online');
  return res.json();
};

export const createCharacter = async (newCharacter: Omit<Character, 'id'>) => {
  console.log("Aggiungo alla sessione corrente:", newCharacter);
  
  await new Promise(resolve => setTimeout(resolve, 800));

  const charConId = { 
    ...newCharacter, 
    id: Date.now()
  };

  personaggiSessione.push(charConId);

  return charConId;
};