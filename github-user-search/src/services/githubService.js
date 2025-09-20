import axios from "axios";

// Advanced GitHub user search
export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  try {
    let query = "";

    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
    );

    // The search API returns an object with "items"
    return response.data.items || [];
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
