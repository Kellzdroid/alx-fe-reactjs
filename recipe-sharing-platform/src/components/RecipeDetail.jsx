import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((item) => item.id === parseInt(id));
        setRecipe(selected);
      })
      .catch((err) => console.error("Error loading recipe:", err));
  }, [id]);

  if (!recipe) {
    return (
      <div className="h-screen flex items-center justify-center text-xl text-gray-500">
        Loading recipe details...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-80 object-cover"
        />
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            {recipe.title}
          </h1>
          <p className="text-gray-600 mb-6">{recipe.summary}</p>

          {/* Ingredients Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              🥬 Ingredients
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>2 cups of pasta</li>
              <li>1 cup grated cheese</li>
              <li>4 strips of bacon</li>
              <li>2 eggs</li>
              <li>Black pepper to taste</li>
            </ul>
          </div>

          {/* Instructions Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              👩‍🍳 Instructions
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 leading-relaxed">
              <li>Boil pasta until al dente and drain.</li>
              <li>Fry the bacon until crispy and set aside.</li>
              <li>Whisk eggs and cheese together in a bowl.</li>
              <li>Mix hot pasta with egg mixture to create a creamy sauce.</li>
              <li>Add bacon and season with black pepper. Serve warm!</li>
            </ol>
          </div>

          <Link
            to="/"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            ← Back to Recipes
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
