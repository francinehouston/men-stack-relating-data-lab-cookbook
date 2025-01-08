

const recipes = [
  {
    id:1,
    name: "Chicken and Waffles",
    description: "A delicious combination of crispy fried chicken and fluffly waffles.",
    ingredients:[
      { name: "Chicken thighs", quantity: "4 pieces" },
      {name:"Buttermilk", quantity:"1 cup"},
      {name: "Flour", quantity:"2 cups"},
      {name: "Salt", quantity:"1 tsp"},
      {name: "Pepper", quantity: "1 tsp"},
      {name:"Eggs", quantity:"2"},
      {name:"Waffle mix", quantity: "1 box"},
      {name:"Maple syrup", quantity:"1/2 cup"}
    ],
    instructions :[
      "Marinate chicken in buttermilk for at least 2 hours.",
      "Mix flour, salt, and pepper in a bowl. Dredge chicken in the flour mixture.",
      "Deep fry chicken until golden brown and fully cooked.",
      "Prepare waffles according to the waffle mix instructions.",
      "Serve chicken on the top of waffles, drizzle with maple syrup."
    ],
    prepTime: "15 minutes",
    cookTime:"30 minutes",
    servings:4,
    category:"Breakfast"
  },
  {
    id:2,
    name: "French Toast",
    description:"Golden fluffy French toast with a hint of cinammon and vanilla.",
    ingredients:[
      {name: "Bread", quantity:"6 slices"},
      {name: "Eggs", quantity: "3"},
      {name: "Milk", quantity: "1/2 cup"},
      {name: "Cinnamon", quantity:"1 tsp"},
      {name: "Vanilla extract", quantity: "1 tsp"},
      {name:"Butter", quantity: "2 tbsp"},
      {name: "Powered sugar", quantity: "1 tbsp(optional)"}
    ],
    instructions:[
      "Whisk eggs, milk, cinnamon, and vanilla in a shallow bowl.",
      "Dip each slice of bread in the mixture, coating both sides.",
      "Heat butter in a skillet over medium heat.",
      "Cook bread slices until golden brown on both sides.",
      " Serve warm, optionally sprinkled with powered sugar."
    ],
    prepTime: "10 mintues",
    cookTime: "15 mintues",
    servings:3,
    category: "Breakfast"
  },
  {
    id:3,
    name: "Chicken Alfredo",
    description :"Creamy Alfredo pasta topped with tendered chicken.",
    ingredients :[
      {name: "Chicken breast", quantity:"2 pieces"},
      {name: "Fettuccine pasta", quantity: "12 oz"},
      {name: "Butter", quantity: "4 tbsp"},
      {name: "Heavy cream", quantity: "1 cup"},
      {name: "Parmesan cheese", quantity:"1cup, grated"},
      {name: "Garlic", quantity:"2 cloves, minced"},
      {name: "Salt", quantity:"to taste"},
      {name: "Pepper", quantity: "to taste"},
      {name: "Parsley", quantity:"for garnish"}
    ],
instructions :[
  "Cook pasta according to package instructions. Drain and set aside.",
  "Season chicken breasts with salt and pepper. Cook in a skillet until fully done, then slice.",
  "In a large pan, melt butter and saute garlic until fragrant.",
  "Add heavy cream and bring to a simmer. Stir in Parmesan cheese until smooth.",
  "Mix pasta into sauce. Top with chicken slices and garnish with parsley.",
  "Serve warm."
],
prepTime :"20 minutes",
cookTime:"25 minutes",
servings: 4,
category : "Dinner"
  }
];
module.exports= router;