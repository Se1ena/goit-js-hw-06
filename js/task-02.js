const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//const liRef = document.createElement('li');
//liRef.classList.add('item');
//liRef.textContent = ('ingredients');
//console.log(liRef);


const allIngridients = ingredients.map(text => {
  const el = document.createElement('li');
   el.textContent = text;
   el.classList.add("item");
   return el;
 });

 const addIngredientsList = document.querySelector('ul');
 addIngredientsList.append(...allIngridients);

