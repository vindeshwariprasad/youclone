// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const ChannelPage = () => {
//   const { id } = useParams(); // Get the channel ID from the URL parameter
//   const [channel, setChannel] = useState(null);

//   useEffect(() => {
//     // Fetch the channel data from the backend using the channel ID
//     axios
//       .get(`http://localhost:5000/api/channels/${id}`)
//       .then((res) => {
//         console.log(res); // Log the response to verify
//         setChannel(res.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching channel:", error);
//       });
//   }, [id]);

//   if (!channel) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>{channel.channelName}</h1>
//       <p>{channel.description}</p>
      
//       <div className="video-grid">
//         {channel.videos.length > 0 ? (
//           channel.videos.map((video) => (
//             <div key={video._id} className="video-card">
//               <img
//                 src={video.thumbnailUrl}
//                 alt={video.title}
//                 className="video-thumbnail"
//               />
//               <h3>{video.title}</h3>
//               <p>{video.description}</p>
//               <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
//                 Watch Video
//               </a>
//             </div>
//           ))
//         ) : (
//           <p>No videos available for this channel.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChannelPage;




import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./HomePage.css";

const ChannelPage = () => {
  const { id } = useParams(); // Get the channel ID from the URL parameter
  const [channel, setChannel] = useState(null);
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
    // Fetch the channel data from the backend using the channel ID
    axios
      .get(`http://localhost:5000/api/channels/${id}`)
      .then((res) => setChannel(res.data))
      .catch((error) => {
        console.error("Error fetching channel:", error);
      });
  }, [id]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/signin");
  };

  const filteredVideos = channel ? channel.videos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];

  if (!channel) return <div>Loading...</div>;

  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <button className="hamburger" onClick={toggleSidebar}>
          ☰
        </button>
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
        <h1>{channel.channelName}</h1>
        <p>{channel.description}</p>

        {/* Video Grid */}
        <div className="video-grid">
          {filteredVideos.length > 0 ? (
            filteredVideos.map((video) => (
              <Link to={`/video/${video._id}`} key={video._id} className="video-card">
                <img src={video.thumbnailUrl} alt={video.title} />
                <h3>{video.title}</h3>
                <p>{video.channelName}</p>
                <span>{video.views} views</span>
              </Link>
            ))
          ) : (
            <p>No videos available for this channel.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default ChannelPage;

