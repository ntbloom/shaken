import { allCocktails } from '../types/indices';
import { SearchResults } from './Results';

function Searchbar() {
  const resultsProps = allCocktails;

  return (
    <div className="indexSearch">
      <div className="searchForms">
        <p>
          <i>Search for drinks by name or ingredients</i>
        </p>
        <form>
          <label>
            <input type="text" placeholder=" drink name" />
          </label>
        </form>
        <form>
          <label>
            <input type="text" placeholder=" included ingredients" />
          </label>
        </form>
        <form>
          <label>
            <input type="text" placeholder=" excluded ingredients" />
          </label>
        </form>
        <input className="searchbuttons" type="submit" value="find drinks" />
      </div>
      <SearchResults results={resultsProps} />
    </div>
  );
}

export default Searchbar;
