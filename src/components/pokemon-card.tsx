import React, { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import './pokemon-card.css';
import formatDate from '../components/helpers/format-date';
import formatType from '../components/helpers/format-type';
import { useHistory } from 'react-router-dom';

type Props = {
  pokemon: Pokemon,
  borderColor:string
};
  
const PokemonCard: FunctionComponent<Props> = ({pokemon, borderColor = '#009688'}) => {

  const [color, setColor] = useState<string>();
  const history = useHistory();
  const showBorder = () => {
      setColor(borderColor);
  }

  const hideBorder = () => {
      setColor('#f5f5f5');
  }

  const  gotoPokemon = (id: number) => {
    history.push(`/pokemons/${id}`);
  }

  return (
    <div className="col s6 m4" onClick={() => gotoPokemon(pokemon.id)} onMouseEnter={showBorder} onMouseLeave={hideBorder}>
      <div className="card horizontal" style={{borderColor: color}}>
        <div className="card-image"> 
          <img src={pokemon.picture} alt={pokemon.name}/>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{pokemon.name}</p>
            <p><small>{formatDate(pokemon.created)}</small></p>
            {pokemon.types.map(type => (
              <span key={type} className={formatType(type)}>{type}</span>
              ))}
          </div>
        </div>
      </div> 
    </div>
  );
}
  
export default PokemonCard;

// j'en suis a 2:35:00 de la video qui parlent des ROUTER , et je n'ai plus rien qui s'affiches besoin d'aide &/ou de reherches  ! 
// Simon Dieny <= c'est le youtubeur de la video ! 
// c'est la vidéo : React Tutorial Français pour Débutant - Cours complet 7h [2022]
// https://www.youtube.com/watch?v=oCINeytlyRA  liens de la vidéo !
// https://www.alexandria-library.co/ressources-react/  les ressources pour mon code !