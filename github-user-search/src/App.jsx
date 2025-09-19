import { useState } from "react";
import { searchUser } from "../services/github.js";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await searchUser(username);
      setUserData(data);
    } catch (err) {
      setUserData(null);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>GitHub User Search</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>

      {userData && (
        <div style={{ marginTop: "1rem" }}>
          <img src={userData.avatar_url} alt="avatar" width="100" />
          <h2>{userData.login}</h2>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
