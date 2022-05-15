import { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string';
import { getHeroByName } from "../../helpers/getHeroByName";
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../hero/HeroCard";


const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q
  });

  const { searchText } = formValues;

  const heroesText = useMemo(() => getHeroByName(q), [q]);
  //const heroesFiltered = getHeroByName(q);

  const handleSearch = e => {
    e.preventDefault();
    navigate(`?q=${ searchText }`);  
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-5">
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar un héroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              className="btn btn-outline-primary mt-1"
              type="submit"
              onClick={handleSearch}
            >
              Buscar...
            </button>
          </form>
        </div>
        <div className="col-lg-7">
          <h4>Resultados</h4>
          <hr />

          { 
            ( q === '' ) 
            ? <div className="alert alert-info">Buscar un héroe</div> 
              : ( heroesText.length === 0 ) 
                && <div className="alert alert-danger">No hay resultados: { q }</div> 
          }

          {
            heroesText.map( hero => (
              <HeroCard 
                key={hero.id}
                { ...hero }
              />
            ) )
          }
        </div>
      </div>
    </div>
  )
}

export default SearchScreen