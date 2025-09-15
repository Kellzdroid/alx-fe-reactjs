import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore.js";

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.recipes);
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);

  if (!recipes.length) return <p>No recipes yet. Add one!</p>;

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: "1px solid #ddd",
            padding: 12,
            marginBottom: 10,
            borderRadius: 8,
          }}
        >
          <h3>{recipe.title}</h3>
          <p style={{ marginBottom: 8 }}>{recipe.description}</p>
          <div style={{ display: "flex", gap: 8 }}>
            <Link
              to={`/recipes/${recipe.id}`}
              style={{ textDecoration: "none" }}
            >
              <button>View</button>
            </Link>
            <Link
              to={`/recipes/${recipe.id}?edit=true`}
              style={{ textDecoration: "none" }}
            >
              <button>Edit</button>
            </Link>
            <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
