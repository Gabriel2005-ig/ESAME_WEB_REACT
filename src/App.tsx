import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';

// Import delle pagine (Nota le Maiuscole iniziali!)
import Home from './pages/Home';
import CharacterList from './pages/CharacterList';
import CharacterDetail from './pages/CharacterDetail';
import NewCharacter from './pages/NewCharacter';

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to='/'>Home</Link>
        <Link to='/characters'>Personaggi</Link>
        <Link to='/new'>Aggiungi (+)</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />


        <Route path='/characters' element={<CharacterList />} />
        <Route path='/character/:id' element={<CharacterDetail />} />


        <Route path='/new' element={<NewCharacter />} />


        <Route path='*' element={<div className="container"><h1>404 - Pagina non trovata</h1></div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;