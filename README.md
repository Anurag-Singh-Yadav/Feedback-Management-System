# Feedback Application

This project is a simple feedback application built with a Node.js backend and a React frontend. It allows users to submit feedback and view all submitted feedback entries.

## Features

- Backend:
  - Node.js server using Express and TypeScript.
  - REST API with endpoints to retrieve all feedback entries and submit new feedback.
  - In-memory array for storing feedback entries.

- Frontend:
  - React application using TypeScript and Tailwind CSS.
  - Form to submit new feedback.
  - List to display all feedback entries

## Backend Setup

1. Install Dependencies

   ```bash
   cd backend
   npm install
    ```

2. Start the Server
    ```bash
    npm run dev
    ```


## Frontend Setup

1. Install Dependencies

   ```bash
   cd frontend
   npm install
    ```

2. Start the Server
    ```bash
    npm run dev
    ```

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Material UI
- **State Management**: Redux
- **Backend**: Node.js., Express, TypeScript

## Logic and Approach for Solving the Problem

### Backend

- The API consisted of two endpoints: one for retrieving a list of all feedback entries and another for adding more feedback. These routes were defined in a separate routing file, which enhances modularity and code maintenance.

-  The controller functions separated the business logic for each route. The getAllFeedback function returned all feedback entries, while the submitFeedback function validated the incoming data and added new feedback entries to an in-memory array.
  

### Frontend

- The frontend was developed using React, TypeScript, and Tailwind CSS.
  
- Redux was used for maintaining the state of the application and managing the entries of feedback.
  
- The application made API calls to fetch existing feedback entries and submit new ones. The Redux store was updated accordingly to reflect the latest data, ensuring that the UI was always in sync with the backend.

## Contact

Anurag Singh Yadav - [anurag.s.yadav.25@gmail.com](mailto:anurag.s.yadav.25@gmail.com )
