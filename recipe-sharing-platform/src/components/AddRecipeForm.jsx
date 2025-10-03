import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};

    if (!title.trim()) formErrors.title = "Title is required.";
    if (!ingredients.trim())
      formErrors.ingredients = "Ingredients are required.";
    if (!steps.trim()) formErrors.steps = "Preparation steps are required.";

    // Optional: ensure at least 2 ingredients
    const ingredientList = ingredients
      .split(",")
      .map((i) => i.trim())
      .filter(Boolean);
    if (ingredientList.length < 2) {
      formErrors.ingredients =
        "Please include at least 2 ingredients (comma separated).";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newRecipe = {
      title,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      instructions: steps.split("\n").map((s) => s.trim()),
    };

    console.log("✅ New recipe submitted:", newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
    alert("Recipe submitted successfully! 🍲");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          🥗 Add a New Recipe
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Recipe Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="e.g. Chocolate Cake"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Ingredients (comma separated)
            </label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              rows="4"
              className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.ingredients ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="e.g. 2 cups flour, 1 cup sugar, 2 eggs"
            ></textarea>
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>

          {/* Steps */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Preparation Steps (one per line)
            </label>
            <textarea
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              rows="6"
              className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.steps ? "border-red-500" : "border-gray-300"
              }`}
              placeholder={`e.g.\n1. Preheat oven to 180°C\n2. Mix ingredients\n3. Bake for 30 minutes`}
            ></textarea>
            {errors.steps && (
              <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold transition-all"
          >
            ✅ Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;
