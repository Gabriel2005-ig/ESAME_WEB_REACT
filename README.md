# Progetto Rick & Morty - Primo Anno 🧬

Ciao! Questo è il progetto che ho sviluppato per il mio primo anno di corso. Si tratta di una piccola applicazione in **React** e **TypeScript** che permette di esplorare i personaggi della serie "Rick & Morty" e di crearne di nuovi in un "laboratorio" virtuale.

## 📂 Com'è organizzato il codice
Ho diviso tutto in cartelle per tenere il progetto ordinato:
* **`src/api/`**: Contiene la logica per scaricare i dati dall'API ufficiale e gestire i nuovi personaggi aggiunti localmente.
* **`src/components/`**: Qui ci sono i componenti riutilizzabili, come le card dei personaggi e i moduli del form.
* **`src/pages/`**: Contiene le diverse schermate dell'app: Home, Lista personaggi, Dettaglio e la pagina di creazione.
* **`src/types/`**: Qui ho definito le interfacce TypeScript per assicurarmi che i dati dei personaggi siano sempre corretti.

## ✨ Cosa fa l'app
1.  **Esplorazione**: L'app recupera la lista dei personaggi direttamente dall'API di Rick & Morty.
2.  **Scheda Dettaglio**: Cliccando su un personaggio si accede ai suoi dettagli specifici.
3.  **Generatore di Personaggi**: È possibile creare nuovi personaggi personalizzati. 
    * **Immagini dinamiche**: Il sistema assegna un'immagine automatica diversa (Umano, Alieno o Robot) grazie all'integrazione con Robohash.
4.  **Gestione Errori**: Se provi a navigare su una pagina inesistente, verrai reindirizzato a una pagina di errore 404 personalizzata.

## ⚙️ Come funziona
* **Gestione Dati**: Uso **React Query** (TanStack Query) per gestire il caricamento dei dati e mostrare i messaggi di "Caricamento..." o errore in modo automatico.
* **Navigazione**: Ho usato `react-router-dom` per creare una navigazione fluida tra le diverse sezioni.
* **Persistenza Temporanea**: Dato che l'API esterna non permette salvataggi, i nuovi personaggi vengono salvati in una variabile locale per tutta la durata della sessione.

## 🏃‍♂️ Come avviarlo
1.  Installa le dipendenze necessarie:
    ```bash
    npm install
    ```
2.  Avvia l'ambiente di sviluppo:
    ```bash
    npm run dev
    ```
3.  Apri l'indirizzo mostrato nel terminale sul tuo browser.