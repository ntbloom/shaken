import { Cocktail, Cocktails, Ingredient } from '../types/drinkParams';

export function Drink(props: Cocktail) {
  const getColor = (props: Cocktail) => {
    let style = props.style.charAt(0).toUpperCase() + props.style.slice(1);
    if (style === 'Double shake') {
      style = 'DoubleShake';
    }
    const color = 'var(--viz'.concat(style).concat(')');
    return { color: color };
  };

  const displayStyle = (props: Cocktail) => {
    return props.style == 'double shake' ? 'egg white' : props.style;
  };

  const displayIngredients = (props: Cocktail) => {
    const ingreds = new Array<string>();
    props.ingredients.forEach((val: Ingredient) => {
      ingreds.push(val.name);
    });
    return ingreds.join(' | ');
  };

  return (
    <div className="nameData" key={props.name.replace(' ', '')}>
      <div>{props.name}</div>
      <div id="ingreds">{displayIngredients(props)}</div>
      <div className="metrics">
        <p>
          {Math.ceil(props.volume).toString()} ounces |{'    '}
          <span style={getColor(props)}>{displayStyle(props)}</span> |{'    '}
          {Math.round(props.abv * 100)}% abv |{'  '}
          {Math.round(props.sweetness)}% sweet
        </p>
      </div>
    </div>
  );
}

export interface ResultsProps {
  results: Cocktails;
}

export function SearchResults(props: ResultsProps | null) {
  return props ? (
    <div id="nv_results">
      {props.results.cocktails.map((drink) => Drink(drink))}
    </div>
  ) : null;
}
