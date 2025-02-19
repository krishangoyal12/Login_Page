import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from '../src/components/NavBar'
import Home from '../src/Pages/Home'
import Login from '../src/Pages/Login'
import Register from '../src/Pages/Register'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path = '/' element = {<Home/>} />
      <Route path = '/login' element = {<Login/>} />
      <Route path = '/register' element = {<Register/>} />
    </Routes>
    </>
  )
}

export default App;
