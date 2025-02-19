import {useState} from 'react'

export default function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const registerUser = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={registerUser}>
        <label htmlFor="Name">Name</label>
        <input type="text" placeholder='enter your name' value = {data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
        <label htmlFor="Email">Email</label>
        <input type="email" placeholder='enter your email' value = {data.email} onChange={(e) => setData({...data, email: e.target.value})} />
        <label htmlFor="Password">Password</label>
        <input type="password" placeholder='enter your password' value = {data.password} onChange={(e) => setData({...data, password: e.target.value})} />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
