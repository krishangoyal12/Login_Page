import {useState} from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


export default function Login() {
  const navigate = useNavigate()

  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const loginUser = async (e) => {
    e.preventDefault()
    const {email, password} = data
    try {
      const {data} = await axios.post('/login',{
        email,
        password
      })
      if(data.error){
        toast.error(data.error)
      }
      else{
        setData({});
        toast.success('Login Success, enjoy your experience')
        navigate('/dashboard')
      }
    } catch (error) {
      console.log(error)
    }

  }
  return (
  
    <form onSubmit={loginUser}>
      <label htmlFor="Email">Email</label>
        <input type="email" placeholder='enter your email' value = {data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
        <label htmlFor="Password">Password</label>
        <input type="password" placeholder='enter your password' value = {data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
        <button type="submit">Login</button>
    </form>
    
  )
}
