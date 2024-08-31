For creating an open-source project, it's crucial to provide comprehensive documentation to help other developers understand, contribute to, and use your project. Here’s a step-by-step guide to setting up the documentation for your project, **Quizzit**:

---

# Quizzit Documentation

## 1. Introduction

**Quizzit** is an interactive quiz platform that allows users to participate in real-time quizzes. This documentation provides a detailed overview of the project, including setup instructions, API references, and contribution guidelines.

## 2. Project Overview

**Quizzit** is designed to facilitate interactive quiz sessions where users can join events, answer questions, and view real-time leaderboards.

## 3. Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [API Reference](#api-reference)
4. [Project Structure](#project-structure)
5. [Contributing](#contributing)
6. [License](#license)
7. [Contact](#contact)

## 4. Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

### Clone the Repository

```bash
git clone https://github.com/imdeepakyadav/Quizzit.git
cd Quizzit
```

### Setup the Backend

1. Navigate to the `server` directory:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables. Create a `.env` file in the `server` directory with the following content:

   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Start the server:

   ```bash
   npm start
   ```

### Setup the Frontend

1. Navigate to the `client` directory:

   ```bash
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

## 5. Usage

### Running the Application

1. Ensure the backend server is running (from the `server` directory).
2. Ensure the frontend development server is running (from the `client` directory).

Visit `http://localhost:3000` in your browser to access the application.

## 6. API Reference

### **User Routes**

- **POST** `/api/users`

  - **Description**: Create a new user.
  - **Body**: `{ username, email, passwordHash, role }`

- **GET** `/api/users`

  - **Description**: Get all users.

- **GET** `/api/users/:id`
  - **Description**: Get a single user by ID.

### **Quiz Routes**

- **POST** `/api/quizzes`

  - **Description**: Create a new quiz.
  - **Body**: `{ title, questions: [{ question, options, correctOption }] }`

- **GET** `/api/quizzes`

  - **Description**: Get all quizzes.

- **GET** `/api/quizzes/:id`
  - **Description**: Get a single quiz by ID.

### **QuizEvent Routes**

- **POST** `/api/quiz-events`

  - **Description**: Create a new quiz event.
  - **Body**: `{ quizId, date, time }`

- **GET** `/api/quiz-events`

  - **Description**: Get all quiz events.

- **GET** `/api/quiz-events/:id`
  - **Description**: Get a single quiz event by ID.

### **UserAnswer Routes**

- **POST** `/api/user-answers`

  - **Description**: Submit user answers.
  - **Body**: `{ userId, eventId, answers: [{ questionId, answer }] }`

- **GET** `/api/user-answers/:eventId`
  - **Description**: Get all user answers for a specific quiz event.

### **Leaderboard Routes**

- **POST** `/api/leaderboard`

  - **Description**: Create or update leaderboard for a quiz event.
  - **Body**: `{ eventId, rankings: [{ userId, score }] }`

- **GET** `/api/leaderboard/:eventId`
  - **Description**: Get leaderboard for a specific quiz event.

## 7. Project Structure

### Backend

- **server/index.js**: Entry point for the backend server.
- **models/**: Contains Mongoose models (e.g., `User`, `Quiz`, `QuizEvent`, `UserAnswer`, `Leaderboard`).
- **routes/**: Contains route handlers for different API endpoints.

### Frontend

- **client/src/App.jsx**: Main application component.
- **client/src/components/**: Contains React components (e.g., `Header`, `Footer`, `Login`, `Register`, `Dashboard`, `QuizList`, `QuizDetail`).
- **client/src/pages/**: Contains page components (e.g., `Home`, `Login`, `Register`, `Dashboard`, `Leaderboard`, `Quizzes`).
- **client/src/styles/**: Contains CSS and Bootstrap styles.

## 8. Contributing

### Guidelines

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test thoroughly.
4. Submit a pull request with a clear description of your changes.

### Code of Conduct

Be respectful and constructive in all interactions. Follow the community guidelines for contributing to open source projects.

## 9. License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 10. Contact

For questions or feedback, please contact the project maintainer at [your-email@example.com].

---

Feel free to adjust the documentation based on your project's needs!
