import React, { FunctionComponent } from 'react';
import PokemonList from './pages/pokemon-list';
import PokemonDetail from './pages/pokemon-detail';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';

const App: FunctionComponent = () => {

 return (
    <Router>
        <div>
            {/*la barre de navigation commun à toutes les pages*/}
            <nav>
                <div className='nav-wrapper teal'>
                    <Link to="/" className='brand-logo center'>Pokédex</Link>
                </div>
            </nav>
            {/*le systeme de gestion des routes de notre application*/}
            <Switch>
                <Route exact path="/" component={PokemonList}/>
                <Route exact path="/pokemons" component={PokemonList}/>
                <Route exact path="/pokemons/edit/:id" component={PokemonEdit}/>
                <Route exact path="/pokemons/:id" component={PokemonDetail}/>
                <Route component={PageNotFound}/>
            </Switch> 
        </div>
    </Router>
     )
    }
            
  
export default App;