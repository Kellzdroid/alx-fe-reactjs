import { useState } from "react";
import { useRecipeStore } from "./recipeStore.js";
import { useNavigate } from "react-router-dom";

const EditRecipeForm = ({ recipe, onDone }) => {
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    updateRecipe(recipe.id, { title, description });
    if (onDone) onDone();
    else navigate(`/recipes/${recipe.id}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 8 }}
    >
      <h3>Edit Recipe</h3>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <div style={{ display: "flex", gap: 8 }}>
        <button type="submit">Save</button>
        <button type="button" onClick={() => navigate(-1)}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditRecipeForm;
