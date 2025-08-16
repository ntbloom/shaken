import { Cocktail, Ingredient } from '../types/drinkParams';
import { getAmountString } from '../utils/amounts';

export function Drink(props: Cocktail) {
  const getColor = (props: Cocktail) => {
    let style = props.style.charAt(0).toUpperCase() + props.style.slice(1);
    if (style === 'Double shake') {
      style = 'DoubleShake';
    }
    const color = 'var(--color'.concat(style).concat(')');
    return { color: color };
  };

  const displayStyle = (props: Cocktail) => {
    return props.style == 'double shake' ? 'egg white' : props.style;
  };

  const displayIngredients = (props: Cocktail) => {
    const ingreds = new Array<string>();
    props.ingredients.forEach((ingredient: Ingredient) => {
      ingreds.push(getAmountString(ingredient.amount) + ' ' + ingredient.name);
    });
    return (
      <div id="drinkRecipe">
        {ingreds.map((ingred) => (
          <p key={ingred.replace(' ', '')}>{ingred}</p>
        ))}
        <p key={props.garnish}>{props.garnish} garnish</p>
      </div>
    );
  };

  return (
    <div id="singleDrink" key={props.name.replace(' ', '')}>
      <div>{props.name}</div>
      <div id="drinkMetrics">
        <p>
          {Math.ceil(props.volume).toString()} ounces |{'    '}
          <span style={getColor(props)}>{displayStyle(props)}</span> |{'    '}
          {Math.round(props.abv * 100)}% abv
        </p>
      </div>
      <div id="drinkIngredients">{displayIngredients(props)}</div>
    </div>
  );
}
