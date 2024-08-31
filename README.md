# Quizzit

**Quizzit** is an interactive quiz platform designed to provide engaging and real-time quiz experiences. Built with React JS, Node.js with Express, and MongoDB, Quizzit allows users to participate in live quiz events, answer questions in real-time, and view leaderboards.

## Features

- **Live Quiz Events:** Create and manage live quiz events.
- **Interactive UI:** Responsive and engaging UI built with React JS.
- **Leaderboard:** Real-time leaderboards displaying top scores.
- **Customizable Quizzes:** Various quiz formats supported.
- **User Profiles:** Registration, login, and quiz performance tracking.

## Tech Stack

- **Frontend:** React JS
- **Backend:** Node.js with Express
- **Database:** MongoDB
- **Real-Time Communication:** Socket.io

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (local or cloud instance)
- **npm** or **yarn** (package managers)

### Installation

1. Clone the Repository:

   ```bash
   git clone https://github.com/imdeepakyadav/Quizzit.git
   cd Quizzit
Install Dependencies:

For the backend:

bash
Copy code
cd server
npm install
For the frontend:

bash
Copy code
cd ../client
npm install
Configure Environment Variables:

Create a .env file in the server directory with:

plaintext
Copy code
MONGO_URI=your_mongodb_connection_string
PORT=5000
Create a .env file in the client directory for frontend configurations if needed.

Run the Application:

Start the backend server:

bash
Copy code
cd server
npm start
Start the frontend development server:

bash
Copy code
cd ../client
npm start
Access the Application:

Open http://localhost:3000 in your browser.

Usage
Creating a Quiz Event: Use the admin dashboard to create and manage events.
Participating in Quizzes: Join and answer questions in real-time.
Viewing Leaderboards: Check rankings and scores.
Contributing
Fork the repository.

Create a feature branch:

bash
Copy code
git checkout -b feature/your-feature
Commit your changes:

bash
Copy code
git commit -am 'Add new feature'
Push to the branch:

bash
Copy code
git push origin feature/your-feature
Create a Pull Request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
React JS: UI framework.
Node.js: Server-side environment.
MongoDB: NoSQL database.
Socket.io: Real-time communication.
