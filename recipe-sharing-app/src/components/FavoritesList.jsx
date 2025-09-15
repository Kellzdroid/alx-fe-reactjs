import { useRecipeStore } from "./recipeStore";

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);

  const favRecipes = recipes.filter((r) => favorites.includes(r.id));

  return (
    <div>
      <h2>⭐ My Favorites</h2>
      {favRecipes.length === 0 && <p>No favorites yet!</p>}
      {favRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
