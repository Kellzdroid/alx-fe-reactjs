import { useState } from "react";
import { fetchUserData, fetchAdvancedUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);

    try {
      let data;

      // Decide between simple or advanced search
      if (username && !location && !minRepos) {
        const user = await fetchUserData(username);
        data = [user]; // wrap single user in array for consistent rendering
      } else {
        data = await fetchAdvancedUsers({
          username,
          location,
          minRepos,
        });
      }

      if (!data || data.length === 0) {
        setError("Looks like we cant find the user");
      } else {
        setResults(data);
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow rounded-xl">
      <h1 className="text-2xl font-bold mb-4 text-center">
        GitHub User Search
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username */}
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border p-2 rounded"
        />

        {/* Location */}
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border p-2 rounded"
        />

        {/* Min Repositories */}
        <input
          type="number"
          placeholder="Minimum repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p className="text-gray-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <ul className="space-y-4">
          {results.map((user) => (
            <li
              key={user.id || user.login}
              className="flex items-center space-x-4 border p-3 rounded hover:bg-gray-50"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">{user.login}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  View Profile
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Search;
