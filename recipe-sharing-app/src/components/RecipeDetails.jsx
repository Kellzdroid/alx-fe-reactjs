import { useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useRecipeStore } from "./recipeStore.js";
import EditRecipeForm from "./EditRecipeForm.jsx";
import DeleteRecipeButton from "./DeleteRecipeButton.jsx";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const showEdit = searchParams.get("edit") === "true";

  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));

  useEffect(() => {
    if (!recipe) {
      // If recipe missing, redirect back home
      navigate("/");
    }
  }, [recipe, navigate]);

  if (!recipe) return null;

  return (
    <div style={{ maxWidth: 700, margin: "0 auto" }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: 12 }}>
        ← Back
      </button>

      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div style={{ marginTop: 16 }}>
        <DeleteRecipeButton id={recipe.id} />
      </div>

      <div style={{ marginTop: 20 }}>
        {showEdit ? (
          <EditRecipeForm
            recipe={recipe}
            onDone={() => navigate(`/recipes/${id}`)}
          />
        ) : (
          <LinkToEdit id={id} />
        )}
      </div>
    </div>
  );
};

const LinkToEdit = ({ id }) => (
  <a href={`/recipes/${id}?edit=true`} style={{ textDecoration: "none" }}>
    <button>Edit this recipe</button>
  </a>
);

export default RecipeDetails;
