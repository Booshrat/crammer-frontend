import React from 'react';
import * as Pages from './pages'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Pages.Homepage />}>
        </Route>
        <Route path='/login' element={<Pages.Login />}>
        </Route>
        <Route path='/register' element={<Pages.Register />}>
        </Route>
        <Route path='/welcome' element={<Pages.Welcome />}>
        </Route>
      </Routes>
    </main>
  )
}

export default App
