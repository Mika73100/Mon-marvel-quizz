import React from 'react'
import { BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import Header from '../Header'
import Landing from '../Landing'
import Footer from '../Footer/index'
import Welcome from '../Welcome'
import Login from '../Login'
import Signup from '../Signup'
import ErrorPage from '../ErrorPage'
import '../../App.css'


function App() {
  return (
  <Router>
    <Header />
      <Routes>
            <Route  path='/landing'  element={<Landing />}/>
            <Route  path='/welcome'  element={<Welcome />}/>
            <Route  path='/login'  element={<Login />}/>
            <Route  path='/signup'  element={<Signup />}/>
            <Route  path='/errorpage'  element={<ErrorPage />}/>
      </Routes>
    <Footer />
  </Router>
  );
}

export default App;
