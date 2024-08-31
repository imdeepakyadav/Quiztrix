Quizzit - An interactive quiz platform designed to bring engaging and real-time quiz experiences. Built with React JS, Node.js with Express, and MongoDB, Quizzit allows users to participate in live quiz events, answer real-time questions, and view leaderboards. The platform features a dynamic UI for seamless interaction and supports various quiz formats to keep users entertained and challenged.

# Quizzit

Welcome to Quizzit, an interactive quiz platform that offers real-time quiz events with a dynamic and engaging user interface. Designed with React JS, Node.js with Express, and MongoDB, Quizzit is your go-to solution for live quiz experiences.

## Features

- **Live Quiz Events:** Create and manage live quiz events where users can join, answer questions, and see their scores in real-time.
- **Interactive UI:** A responsive and engaging user interface built with React JS to provide a seamless experience.
- **Leaderboard:** View real-time leaderboards displaying top scores and rankings.
- **Customizable Quizzes:** Support for various quiz formats including multiple-choice, true/false, and more.
- **User Profiles:** Users can register, log in, and track their quiz performance.

## Tech Stack

- **Frontend:** React JS
- **Backend:** Node.js with Express
- **Database:** MongoDB
- **Real-Time Communication:** Socket.io (for real-time updates)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn (package managers)

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/quizzit.git
   cd quizzit
   ```

2. **Install Dependencies:**

   For the backend:
   ```bash
   cd server
   npm install
   ```

   For the frontend:
   ```bash
   cd client
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the `server` directory with the following variables:
   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

   In the `client` directory, create a `.env` file for any necessary frontend configurations.

4. **Run the Application:**

   Start the backend server:
   ```bash
   cd server
   npm start
   ```

   Start the frontend development server:
   ```bash
   cd client
   npm start
   ```

5. **Access the Application:**
   Open your browser and navigate to `http://localhost:3000` to access the Quizzit platform.

## Usage

- **Creating a Quiz Event:** Log in as an admin and use the admin dashboard to create and manage quiz events.
- **Participating in Quizzes:** Join a live quiz event from the user dashboard and answer questions in real-time.
- **Viewing Leaderboards:** Check the leaderboard to see the top scores and rankings.

## Contributing

We welcome contributions to improve Quizzit! Please follow these steps to contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **React JS** - For the powerful UI framework.
- **Node.js** - For the efficient server-side environment.
- **MongoDB** - For the flexible NoSQL database.
- **Socket.io** - For real-time communication.
