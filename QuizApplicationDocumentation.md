
# Quiz Application Documentation

## Overview

The Quiz Application is an interactive web-based platform designed to test users' knowledge across various subjects including World War history, Science, and Art. It presents questions one at a time and allows users to select 'True' or 'False' as answers. The application provides immediate feedback on the correctness of the answers and displays a final score upon completion of the quiz.

## Application Structure

### HTML

The `index.html` file sets up the basic structure of the quiz interface, including a container for the quiz (`#quiz-container`), a display area for questions (`#question`), buttons for answering 'True' or 'False' (`#true` and `#false`), and a section to show feedback (`#answer`). 

### CSS

The `styles.css` file contains styling rules for the Quiz Application, ensuring an engaging and responsive user interface. It styles the quiz container, question, answer buttons, feedback display, and the restart button, providing visual cues to user interactions through color changes and transitions.

### JavaScript

The functionality of the Quiz Application is split across two JavaScript files: `app.js` and `quiz_data.js`.

#### `quiz_data.js`

This file contains an array `quiz_Questions` with objects representing individual quiz questions. Each object includes a `topic`, `question` text, and the correct `answer` (true or false).

#### `app.js`

The `app.js` file contains the logic to run the quiz:

- **Initialization**: Variables for the current question index and score are initialized.
- **Displaying Questions**: The `displayQuestion` function updates the UI with the current question.
- **Answer Checking**: The `checkAnswer` function compares the user's answer to the correct answer, updates the score if correct, and provides immediate feedback.
- **Navigation**: Users can navigate through questions. Once all questions are answered, a score summary is displayed along with a 'Restart' button.
- **Restarting the Quiz**: The `restartQuiz` function resets the quiz, allowing users to try again.

### Interaction Flow

1. **Starting the Quiz**: On page load, the first question is displayed.
2. **Answering Questions**: Users respond by clicking 'True' or 'False'. Feedback is shown, and the next question loads automatically.
3. **Completing the Quiz**: After the last question, the final score and a restart option are presented.

## Conclusion

The Quiz Application provides a straightforward and engaging way to test knowledge on various topics. Its simple design, combined with dynamic feedback and scoring, enhances learning and user engagement.
