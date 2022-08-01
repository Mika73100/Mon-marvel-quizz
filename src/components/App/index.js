import React from 'react'
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom'
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
            <Route exact path='/'  element={<Landing />}/>
            <Route  path='/Welcome'  element={<Welcome />}/>
            <Route  path='/Login'  element={<Login />}/>
            <Route  path='/Signup'  element={<Signup />}/>
            <Route  path='/Errorpage'  element={<ErrorPage />}/>
      </Routes>
    <Footer />
  </Router>


  
  
  );
}

export default App;
