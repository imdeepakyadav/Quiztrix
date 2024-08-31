import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from backend
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/users/profile"); // Adjust endpoint as needed
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Welcome, {user.username}!</p>
      {/* Display additional user info */}
    </div>
  );
};

export default Dashboard;
