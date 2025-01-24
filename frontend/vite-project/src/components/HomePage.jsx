import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const [videos, setVideos] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userInfo = JSON.parse(atob(token.split(".")[1]));
      setUser(userInfo);
    }
    axios.get("http://localhost:5000/api/videos").then((res) => setVideos(res.data));
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/signin");
  };

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <button className="hamburger" onClick={toggleSidebar}>
          ☰
        </button>
        {/* <h1>YouTube Clone</h1> */}
            <Link to="/">
                    <h1>YouTube Clone</h1>
            </Link>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {user ? (
          <div className="auth-section">
            {/* <img src={user.avatar} alt="avatar" className="avatar" /> */}
            <span>{user.username}</span>
            <button onClick={handleSignOut}>Sign Out</button>
          </div>
        ) : (
          <button className="signin-btn" onClick={() => navigate("/signin")}>Sign In</button>
        )}
      </header>

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul>
          <li>Home</li>
          <li>Trending</li>
          <li>Subscriptions</li>
          <li>History</li>
          <li>Playlists</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="content">


        {/* Video Grid */}
        <div className="video-grid">
          {filteredVideos.map((video) => (
            <Link to={`/video/${video._id}`} key={video._id} className="video-card">
              <img src={video.thumbnailUrl} alt={video.title} />
              <h3>{video.title}</h3>
              <p>{video.channelName}</p>
              <span>{video.views} views</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
