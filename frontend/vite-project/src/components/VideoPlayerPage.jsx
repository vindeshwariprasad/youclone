import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./VideoPlayerPage.css";

const VideoPlayerPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [user, setUser] = useState(null);
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userInfo = JSON.parse(atob(token.split(".")[1]));
      setUser(userInfo);
    }

    // Fetch video details
    axios.get(`http://localhost:5000/api/videos/${id}`).then((res) => {
      setVideo(res.data);
      setComments(res.data.comments || []);
    });

    // Fetch suggested videos
    axios.get("http://localhost:5000/api/videos").then((res) => {
      const filteredVideos = res.data.filter((vid) => vid._id !== id);
      setSuggestedVideos(filteredVideos);
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

  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const comment = {
      commentId: Math.random().toString(36).substring(2, 15),
      userId: user?.id || "guest",
      text: newComment,
      timestamp: new Date().toISOString(),
    };

    // Post the new comment to the server
    axios
      .post(`http://localhost:5000/api/videos/${id}/comments`, comment)
      .then(() => {
        // Re-fetch the updated comments to ensure the page reflects the latest state
        axios.get(`http://localhost:5000/api/videos/${id}`).then((res) => {
          setComments(res.data.comments || []);
        });
        setNewComment(""); // Clear the comment input
        console.log("add sucess");
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
      });
  };

  const handleLike = () => {
    console.log("Like button clicked"); 
    if (liked) {
      setLiked(false);
      updateLikeDislike("like", "decrement");
    } else {
      setLiked(true);
      updateLikeDislike("like", "increment");
      if (disliked) {
        setDisliked(false);
        updateLikeDislike("dislike", "decrement");
      }
    }
  };
  
  const handleDislike = () => {
    console.log("disLike button clicked"); 
    if (disliked) {
      setDisliked(false);
      updateLikeDislike("dislike", "decrement");
    } else {
      setDisliked(true);
      updateLikeDislike("dislike", "increment");
      if (liked) {
        setLiked(false);
        updateLikeDislike("like", "decrement");
      }
    }
  };
  
  const updateLikeDislike = (actionType, action) => {
    console.log("send request clicked"); 
    axios
      .put(`http://localhost:5000/api/videos/${id}`, { action : actionType})
      .then((res) => {
        console.log("Response from backend:", res.data);
        setVideo(res.data); // Update video state with new like/dislike counts
      })
      .catch((error) => {
        console.error("Error updating like/dislike:", error);
      });
  };

  const navigateToChannelPage = (channelId) => {
    navigate(`/channel/${video.channelId}`);
  };
  


  if (!video) return <div>Loading...</div>;

  return (
    <div className="video-player-page">
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
          <input type="text" placeholder="Search..." />
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

      <div className="main-content">
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

        {/* Video Section */}
        <section className="video-section">
          <iframe
            className="video-player"
            src={video.videoUrl}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <h1>{video.title}</h1>
          <p>{video.description}</p>
          <p onClick={() => navigateToChannelPage(video.channelId)}>Channel: {video.channelId}</p>

          {/* Like/Dislike Buttons */}
          <div className="video-actions">
            <button onClick={handleLike}>{video.likes}👍 Like </button>
            <button onClick={handleDislike}>{video.dislikes}👎 Dislike</button>
          </div>

          {/* Comments Section */}
          <div className="comments-section">
            <h2>Comments</h2>
            <div className="add-comment">
              <input
                type="text"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button onClick={handleAddComment}>Comment</button>
            </div>
            <ul className="comments-list">
              {comments.map((comment) => (
                <li key={comment.commentId}>
                  <p>{comment.text}</p>
                  <small>{new Date(comment.timestamp).toLocaleString()}</small>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Suggested Videos Section */}
        <aside className="suggested-videos">
          <h2>Suggested Videos</h2>
          {suggestedVideos.map((suggestedVideo) => (
            <Link to={`/video/${suggestedVideo._id}`} key={suggestedVideo._id} className="suggested-video-card">
              <img src={suggestedVideo.thumbnailUrl} alt={suggestedVideo.title} />
              <div className="suggested-video-details">
                <p>{suggestedVideo.title}</p>
                <small>{suggestedVideo.channelName}</small>
                <small>{suggestedVideo.views} views</small>
              </div>
            </Link>
          ))}
        </aside>
      </div>
    </div>
  );
};

export default VideoPlayerPage;
