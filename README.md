# Progetto Esame React - Rick & Morty

Questo progetto è una Single Page Application (SPA) creata per l'esame. Usa l'API pubblica di Rick and Morty per mostrare i personaggi.

## Istruzioni
1. Scarica la cartella
2. Apri il terminale e scrivi `npm install` per scaricare le librerie
3. Scrivi `npm run dev` per far partire il sito

## API Utilizzate
- **GET**: https://rickandmortyapi.com/ (per scaricare i personaggi)
- **POST**: https://jsonplaceholder.typicode.com/posts (usata come mock per simulare la creazione, perché l'API di Rick & Morty non fa salvare davvero)

## Funzionalità
- Pagina Home
- Lista personaggi con griglia
- Dettaglio personaggio (con passaggio dati senza URL)
- Form per creare nuovo personaggio
- Gestione errori e caricamento
- Pagina 404

## Struttura
- `components/`: contiene la Card
- `pages/`: contiene le pagine del sito
- `api/`: le chiamate fetch
- `types/`: le interfacce TypeScript