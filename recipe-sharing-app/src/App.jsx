import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      {/* Other routes/components */}
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
}

export default App;
