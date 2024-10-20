import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching users data using native fetch API
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Failed to fetch users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const updateUser = (id, updatedData) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === id ? { ...user, ...updatedData } : user))
    );
  };

  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <UserContext.Provider value={{ users, loading, updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
