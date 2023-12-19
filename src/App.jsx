import React from 'react';
import * as Pages from './pages'
import { Routes, Route } from 'react-router-dom';
import * as Components from "./components"
import "./App.css"

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Components.PageWrapper />}>
          <Route index element={<Pages.Homepage />} />
          <Route path='/login' element={<Pages.Login />} />
          <Route path='/register' element={<Pages.Register />} />
          <Route path='/flashcard' element={<Pages.FlashCard />} />
          <Route path='/welcome' element={<Pages.Welcome />} />
          </Route>
      </Routes>
    </main>
  )
}

export default App
