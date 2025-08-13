import { Cocktails } from '../types/drinkParams';
import { Drink } from './Drink';

export interface ResultsProps {
  results: Cocktails;
}

export function SearchResults(props: ResultsProps | null) {
  return props ? (
    <div id="searchResults">
      {props.results.cocktails.map((drink) => Drink(drink))}
    </div>
  ) : null;
}
