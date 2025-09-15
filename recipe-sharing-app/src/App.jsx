import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm.jsx";
import RecipeList from "./components/RecipeList.jsx";
import RecipeDetails from "./components/RecipeDetails.jsx";

function Home() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
      <h1>🍲 Recipe Sharing App</h1>
      <AddRecipeForm />
      <hr style={{ margin: "20px 0" }} />
      <RecipeList />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          padding: 12,
          borderBottom: "1px solid #eee",
          marginBottom: 12,
        }}
      >
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        {/* Future: add a dedicated edit route like /recipes/:id/edit */}
      </Routes>
    </BrowserRouter>
  );
}
