import React from 'react';
import * as Pages from './pages'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Pages.Homepage />} />

        <Route path='/login' element={<Pages.Login />} />

        <Route path='/register' element={<Pages.Register />} />

        <Route path='/flashcard' element={<Pages.FlashCard />} />

        <Route path='/welcome' element={<Pages.Welcome />} />

      </Routes>
    </main>
  )
}

export default App
