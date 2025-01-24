# YouTube Clone - MERN Stack Capstone Project

## Project Overview

This project is a YouTube clone developed using the **MERN Stack** (MongoDB, Express, React, Node.js). It is a full-stack web application where users can view and interact with videos. This project aims to simulate a real-world application, covering key functionalities such as video management, user authentication, and channel management.

## Features

### Frontend (React)
1. **Home Page:**
   - YouTube-like header with a static sidebar that can be toggled using a hamburger menu.
   - A grid layout of video thumbnails showing the video title, channel name, and number of views.
   
2. **User Authentication:**
   - User registration and login functionality with `Username`, `Email`, and `Password`.
   - JWT-based authentication system.
   - Once logged in, the user’s name will be displayed in the header, and they will be redirected to the homepage.

3. **Search and Filter Functionality:**
   - A search bar on the homepage that allows users to search videos by title.

4. **Video Player Page:**
   - Video player along with video details (title, description, channel name).
   - Like, dislike buttons, and comment section.
   - Users can add, edit, and delete comments on videos, with the comments saved in the database.

5. **Channel Page:**
   - Display a list of videos uploaded by a specific channel.
  

6. **Responsive Design:**
   - The application is fully responsive, ensuring compatibility across devices (desktops, tablets, and smartphones).

### Backend (Node.js, Express)
1. **API Endpoints:**
   - **User Authentication:** APIs for signing up, logging in, and generating JWT tokens.
   - **Channel Management:** APIs for creating new channels and retrieving channel information.
   - **Video Management:** APIs for fetching, updating, and deleting videos.
   - **Comment Management:** APIs for adding and retrieving comments for each video.

2. **Database (MongoDB):**
   - Store user data, video details, channels, and comments.
   - Store file metadata such as video URLs and thumbnails.

## Technologies Used

- **Frontend:** React, React Router, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (MongoDB Atlas or local instance)
- **Authentication:** JWT (JSON Web Tokens)
- **Version Control:** Git

## Setup Instructions

### Prerequisites
Ensure you have the following installed on your system:
- Node.js
- MongoDB (MongoDB Atlas or a local MongoDB instance)
- Git

### Steps to Run Locally

1. **Clone the Repository:**
 
   git clone https://github.com/your-repo/youtube-clone.git
   cd youtube-clone
  

2. **Install Dependencies:**
   - For the backend:
     
     cd backend
     npm install
     node server.js
   - For the frontend:
     
     cd frontend
     npm install
     npm run dev





## License
This project is licensed under the MIT License.


This README outlines the features, setup instructions, and project details for the YouTube Clone built with the MERN stack.
