import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import VideoPlayerPage from "./components/VideoPlayerPage";
import ChannelPage from "./components/ChannelPage";
import SignIn from "./components/SignIn";
import Register from "./components/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/video/:id" element={<VideoPlayerPage />} />
      <Route path="/channel/:id" element={<ChannelPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
