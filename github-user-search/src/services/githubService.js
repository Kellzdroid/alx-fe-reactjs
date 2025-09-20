import axios from "axios";

// Fetch a single user by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

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

    return response.data.items || [];
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
