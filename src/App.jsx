import {  useContext } from 'react'
import './App.css'

import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Login from './pages/logın';
import Task from './pages/task';

function App() {

  const { user } = useContext(AuthContext)
  console.log("user=>", user)

  return (
    <div className='image container mx-auto'>
     
      <Routes>
      <Route path="/" element={user ? <Navigate to={'/task'} /> : <Login/>} />
      <Route path="/task" element={!user ? <Navigate to={'/'} /> : <Task/>} />
      </Routes>

      

      {/* <FilterButtons filter={filter} setFilter={setFilter} /> */}

      
      
    </div>
  )
}

export default App;
