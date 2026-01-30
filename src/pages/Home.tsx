import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container" style={{textAlign: 'center', marginTop: '50px'}}>
            <h1>Benvenuto nell'App Rick & Morty</h1>
            <p style={{fontSize: '1.2rem', color: '#666'}}>
                Questa è la Home Page del progetto d'esame.
            </p>
            
            <div style={{marginTop: '30px'}}>
               <Link to="/characters" style={{
                   padding: '10px 20px', 
                   backgroundColor: '#646cff', 
                   color: 'white', 
                   borderRadius: '5px',
                   textDecoration: 'none'
               }}>
                   Vai ai Personaggi →
               </Link>
            </div>
        </div>
    );
};

export default Home;