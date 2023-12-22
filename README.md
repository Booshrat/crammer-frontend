# Crammer App - Frontend

Welcome, this is the Front-End Repository for the Crammer App and has been made by Thomas, Stephan, Joe, Abid, and Booshrat.
We used the MERN stack to build this app. The purpose of our app is to boost productivity in student revision and increase competitiveness to a healthy degree. And we have done this through three main features:
1. Flashcards: Users can create their own flashcards
2. Quizzes: Users can take part in educational quizzes which we retrieved from an external API (https://the-trivia-api.com/) and the user can get a score based on correct answers.
3. Leaderboard: It takes the score from the quiz page and enters it into a leaderboard and the user can track their progress, and compete healthily.

# Installation & usage

- You will need to clone the repository for the backend of our project which you will find here: https://github.com/Booshrat/crammer-backend

### Installation of backend

- Clone the repo and cd inside the crammer-backend folder
- switch to the staging branch following the command `git switch staging`
- create a file called .env
- Copy and paste this into the .env 
```
SECRET = 89272C7FB8E681E84EA9B7AA7945A3DFD0D45ACA421FC485CE7B0D0912A5D838
MONGODB_URI='mongodb://127.0.0.1:27017'
```
- run `npm i` or `npm install`
- run `npm run dev` and app runs on (http://127.0.0.1:3000)

### Installation of frontend

- Clone the repo and cd inside the crammer-frontend folder
- switch to the staging branch following the command `git switch staging`
- run `npm i` or `npm install`
- run `npm run dev`. It will give you a URL (e.g http://localhost:5173/)

# Technologies used

- React
- React router
- Vite
- Vitest

# Process

- Started by designing each page of our app on Figma
- Opened the terminal and run the command `npm create vite@latest`, typed `crammer-frontend` as the Project name, selected `React` as a framework, and selected `JavaScript` as a variant
- Created folders called `pages` and `components` inside the `src` folder and inside those folders created folders for each page and component.
- Inside each of these folders we created an index.jsx file
- For styling we created css files and for testing created test files inside each folder
- We did overall styling inside App.css file





