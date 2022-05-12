import React, { FunctionComponent } from 'react';
import PokemonList from './pages/pokemon-list';
import PokemonDetail from './pages/pokemon-detail';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const App: FunctionComponent = () => {

 return (
    <Router>
        <div>
            {/*la barre de navigation commun à toutes les pages*/}
            <nav>
                <div className='nav-wrapper teal'>
                    <link as="/" className='brand-logo center'>Pokédex</link>
                </div>
            </nav>
            {/*le systeme de gestion des routes de notre application*/}
            <switch>
                <Route exact path="/" component={PokemonList}/>
                <Route exact path="/pokemons" component={PokemonList}/>
                <Route exact path="/pokemons/:id" component={PokemonDetail}/>
            </switch> 
        </div>
    </Router>
     )
    }
            
  
export default App;