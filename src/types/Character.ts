// Tipi personalizzati per stato e genere
export type CharacterStatus = 'Alive' | 'Dead' | 'unknown';
export type CharacterGender = 'Female' | 'Male' | 'Genderless' | 'unknown';

export interface Character {
  id: number;
  name: string;
  status: CharacterStatus; 
  species: string;
  type: string;
  gender: CharacterGender;
  image: string;
  // Oggetti annidati
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
}