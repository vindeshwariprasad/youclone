const videos = [
    {
      "videoId": "video01",
      "title": "Master Python in 30 Minutes",
      "thumbnailUrl": "https://img.youtube.com/vi/dXo0LextZTU/0.jpg",
      "description": "A fast-paced guide to mastering Python basics.",
      "channelId": "channel01",
      "uploader": "user01",
      "views": 22500,
      "likes": 1500,
      "dislikes": 60,
      "uploadDate": "2024-11-15",
      "videoUrl": "https://www.youtube.com/embed/M66U_DuMCS8",
      "comments": [
        {
          "commentId": "comment01",
          "userId": "user02",
          "text": "This was incredibly helpful for beginners!",
          "timestamp": "2024-11-16T09:45:00Z"
        }
      ]
    },
    {
      "videoId": "video02",
      "title": "Deep Dive into Data Structures in Java",
      "thumbnailUrl": "https://img.youtube.com/vi/dXo0LextZTU/0.jpg",
      "description": "Learn about data structures in Java with clear examples.",
      "channelId": "channel01",
      "uploader": "user01",
      "views": 18500,
      "likes": 1200,
      "dislikes": 45,
      "uploadDate": "2024-10-18",
      "videoUrl": "https://www.youtube.com/embed/M66U_DuMCS8",
      "comments": [
        {
          "commentId": "comment02",
          "userId": "user04",
          "text": "The examples really helped me understand the concepts.",
          "timestamp": "2024-10-19T11:15:00Z"
        }
      ]
    },
    {
      "videoId": "video03",
      "title": "Learn SQL in 15 Minutes",
      "thumbnailUrl": "https://img.youtube.com/vi/dXo0LextZTU/0.jpg",
      "description": "Quick and easy SQL tutorial for beginners.",
      "channelId": "channel01",
      "uploader": "user01",
      "views": 31000,
      "likes": 2000,
      "dislikes": 90,
      "uploadDate": "2024-12-05",
      "videoUrl": "https://www.youtube.com/embed/M66U_DuMCS8",
      "comments": [
        {
          "commentId": "comment03",
          "userId": "user06",
          "text": "Perfect for those starting with databases, thanks!",
          "timestamp": "2024-12-06T14:00:00Z"
        }
      ]
    },
    {
      "videoId": "video04",
      "title": "JavaScript ES6 Features Explained",
      "thumbnailUrl": "https://img.youtube.com/vi/dXo0LextZTU/0.jpg",
      "description": "An overview of the essential ES6 features in JavaScript.",
      "channelId": "channel01",
      "uploader": "user01",
      "views": 27500,
      "likes": 1700,
      "dislikes": 70,
      "uploadDate": "2024-10-25",
      "videoUrl": "https://www.youtube.com/embed/M66U_DuMCS8",
      "comments": [
        {
          "commentId": "comment04",
          "userId": "user08",
          "text": "ES6 is a game-changer for JavaScript. Great video!",
          "timestamp": "2024-10-26T10:30:00Z"
        }
      ]
    },
    {
      "videoId": "video05",
      "title": "The Basics of React State and Props",
      "thumbnailUrl": "https://img.youtube.com/vi/dXo0LextZTU/0.jpg",
      "description": "A beginner's guide to state and props in React.",
      "channelId": "channel02",
      "uploader": "user02",
      "views": 12000,
      "likes": 800,
      "dislikes": 30,
      "uploadDate": "2024-11-02",
      "videoUrl": "https://www.youtube.com/embed/M66U_DuMCS8",
      "comments": [
        {
          "commentId": "comment05",
          "userId": "user10",
          "text": "Thanks for explaining state and props clearly!",
          "timestamp": "2024-11-03T16:45:00Z"
        }
      ]
    },
    {
      "videoId": "video06",
      "title": "CSS Flexbox Layout: A Complete Guide",
      "thumbnailUrl": "https://img.youtube.com/vi/dXo0LextZTU/0.jpg",
      "description": "Master CSS Flexbox with real-world examples.",
      "channelId": "channel02",
      "uploader": "user02",
      "views": 35000,
      "likes": 2500,
      "dislikes": 110,
      "uploadDate": "2024-12-12",
      "videoUrl": "https://www.youtube.com/embed/M66U_DuMCS8",
      "comments": [
        {
          "commentId": "comment06",
          "userId": "user12",
          "text": "I struggled with Flexbox before this, but now it makes sense!",
          "timestamp": "2024-12-13T13:00:00Z"
        }
      ]
    },
    {
      "videoId": "video07",
      "title": "Exploring Web APIs in JavaScript",
      "thumbnailUrl": "https://img.youtube.com/vi/dXo0LextZTU/0.jpg",
      "description": "A deep dive into JavaScript's web APIs with examples.",
      "channelId": "channel02",
      "uploader": "user02",
      "views": 15500,
      "likes": 950,
      "dislikes": 40,
      "uploadDate": "2024-11-30",
      "videoUrl": "https://www.youtube.com/embed/M66U_DuMCS8",
      "comments": [
        {
          "commentId": "comment07",
          "userId": "user14",
          "text": "This tutorial helped me with the Fetch API. Thanks!",
          "timestamp": "2024-12-01T17:45:00Z"
        }
      ]
    },
    {
      "videoId": "video08",
      "title": "Building RESTful APIs with Node.js",
      "thumbnailUrl": "https://img.youtube.com/vi/dXo0LextZTU/0.jpg",
      "description": "Learn how to build RESTful APIs using Node.js.",
      "channelId": "channel02",
      "uploader": "user02",
      "views": 19500,
      "likes": 1300,
      "dislikes": 50,
      "uploadDate": "2024-12-01",
      "videoUrl": "https://www.youtube.com/embed/M66U_DuMCS8",
      "comments": [
        {
          "commentId": "comment08",
          "userId": "user16",
          "text": "The examples here are very practical, thanks for sharing!",
          "timestamp": "2024-12-02T18:15:00Z"
        }
      ]
    },
    {
      "videoId": "video09",
      "title": "Introduction to Git and GitHub",
      "thumbnailUrl": "https://img.youtube.com/vi/dXo0LextZTU/0.jpg",
      "description": "A beginner's guide to using Git and GitHub for version control.",
      "channelId": "channel02",
      "uploader": "user02",
      "views": 24000,
      "likes": 1600,
      "dislikes": 70,
      "uploadDate": "2024-11-07",
      "videoUrl": "https://www.youtube.com/embed/M66U_DuMCS8",
      "comments": [
        {
          "commentId": "comment09",
          "userId": "user18",
          "text": "This video made version control so much easier to understand!",
          "timestamp": "2024-11-08T09:00:00Z"
        }
      ]
    },
    {
      "videoId": "video10",
      "title": "Understanding Asynchronous JavaScript",
      "thumbnailUrl": "https://img.youtube.com/vi/dXo0LextZTU/0.jpg",
      "description": "A guide to asynchronous programming in JavaScript with promises and async/await.",
      "channelId": "channel02",
      "uploader": "user02",
      "views": 22000,
      "likes": 1450,
      "dislikes": 55,
      "uploadDate": "2024-12-15",
      "videoUrl": "https://www.youtube.com/embed/M66U_DuMCS8",
      "comments": [
        {
          "commentId": "comment10",
          "userId": "user20",
          "text": "I finally get how async/await works, thank you!",
          "timestamp": "2024-12-16T10:30:00Z"
        }
      ]
    }
  ]

  module.exports = videos;

  