import React from 'react';
import * as Pages from './pages'
import { Routes, Route } from 'react-router-dom';
import * as Components from "./components"
import "./App.css"
import { UserProvider } from './contexts';

function App() {
  return (
    <main>
      <UserProvider>
      <Routes>
        <Route path="/" element={<Components.PageWrapper/>}>
          <Route index element={<Pages.Homepage />} />
          <Route path='/login' element={<Pages.Login/>} />
          <Route path='/register' element={<Pages.Register />} />
          <Route path='/flashcard' element={<Pages.FlashCard />} />
          <Route path='/Leaderboard' element={<Pages.Leaderboard />} />
          <Route path= '/quiz' element={<Pages.QuizPage />} />
          <Route path='/welcome' element={<Pages.Welcome />} />
          <Route path="/quiz" element={<Pages.QuizPage />} />
          </Route>
      </Routes>
      </UserProvider>
    </main>
  )
}

export default App
