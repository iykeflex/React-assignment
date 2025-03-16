import React from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      {user?.role === "Admin" && <p>Admin Controls</p>}
      {user?.role === "Editor" && <p>Content Editor Panel</p>}
      {user?.role === "Viewer" && <p>Read-only Reports</p>}
    </div>
  );
};

export default Dashboard;

// src/pages/Profile.tsx
import React from "react";
import { useAuth } from "../context/AuthContext";

const Profile: React.FC = () => {
  const { user } = useAuth();
  return <div>Profile: {user?.username}</div>;
};

export default Profile;

// src/pages/Settings.tsx
import React from "react";

const Settings: React.FC = () => {
  return <div>Settings Page (Admins Only)</div>;
};

export default Settings;

// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <nav>
      {user && (
        <>
          <span>{user.username} ({user.role})</span>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          {user.role === "Admin" && <Link to="/settings">Settings</Link>}
          <button onClick={logout}>Logout</button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
