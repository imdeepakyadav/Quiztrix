# Contributing to Quiztrix

Thank you for your interest in contributing to Quiztrix! We welcome contributions from the community to help make the project better. This document provides guidelines for contributing to Quiztrix.

## How to Contribute

### Reporting Issues

1. **Check Existing Issues**: Before opening a new issue, please check the [existing issues](https://github.com/imdeepakyadav/Quiztrix/issues) to see if your problem has already been reported.
2. **Create a New Issue**: If your issue is not listed, please [open a new issue](https://github.com/imdeepakyadav/Quiztrix/issues/new). Provide as much detail as possible, including:
   - A descriptive title
   - A detailed description of the issue
   - Steps to reproduce the issue
   - Any relevant screenshots or logs

### Suggesting Enhancements

1. **Check Existing Requests**: Review the [existing enhancement requests](https://github.com/imdeepakyadav/Quiztrix/issues) to avoid duplicates.
2. **Submit a New Request**: If your suggestion has not been made, please [submit a new request](https://github.com/imdeepakyadav/Quiztrix/issues/new). Include:
   - A descriptive title
   - A detailed explanation of the enhancement
   - How the enhancement will benefit the project or users

### Contributing Code

1. **Fork the Repository**: Click the "Fork" button on the [Quiztrix GitHub page](https://github.com/imdeepakyadav/Quiztrix) to create a copy of the repository under your GitHub account.
2. **Clone Your Fork**: Clone the forked repository to your local machine:

   ```bash
   git clone https://github.com/your-username/Quiztrix.git
   ```

3. **Create a Branch**: Create a new branch for your changes:

   ```bash
   git checkout -b your-feature-branch
   ```

4. **Make Your Changes**: Implement your feature or bug fix. Ensure your code follows the project's coding style and guidelines.

5. **Test Your Changes**: Thoroughly test your changes to ensure they work as expected and do not introduce new issues.

6. **Commit Your Changes**: Commit your changes with a descriptive message:

   ```bash
   git add .
   git commit -m "Add a brief description of the changes"
   ```

7. **Push Your Branch**: Push your changes to your forked repository:

   ```bash
   git push origin your-feature-branch
   ```

8. **Create a Pull Request**: Navigate to the [Quiztrix GitHub repository](https://github.com/imdeepakyadav/Quiztrix) and open a pull request from your forked repository's branch. Provide a clear description of your changes and why they are necessary.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Be respectful and considerate in all interactions.

## Development Environment Setup

To get started with development, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/imdeepakyadav/Quiztrix.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd Quiztrix
   ```

3. **Set Up the Backend**:

   - Navigate to the `server` directory and install dependencies:

     ```bash
     cd server
     npm install
     ```

   - Create a `.env` file with the required environment variables.

4. **Set Up the Frontend**:

   - Navigate to the `client` directory and install dependencies:

     ```bash
     cd ../client
     npm install
     ```

5. **Start the Application**:

   - Start the backend server:

     ```bash
     npm start
     ```

   - Start the frontend development server:

     ```bash
     npm start
     ```

6. **Run Tests** (if applicable):

   ```bash
   npm test
   ```

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).

## Contact

For further questions or assistance, please contact the project maintainer at [your-email@example.com].
