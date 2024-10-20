import React, { useContext } from "react";
import UserContext, { UserProvider } from "./context/UserContext";
import UserCard from "./components/UserCard";
import LoadingSpinner from "./components/LoadingSpinner";


const App = () => {
  const { users, loading } = useContext(UserContext);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default () => (
  <UserProvider>
    <App />
  </UserProvider>
);
