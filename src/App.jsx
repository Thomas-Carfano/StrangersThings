import './App.css'
import NavBar from './Components/NavBar'
import {Routes, Route} from 'react-router-dom'
import SignIn from './Pages/LoginPage'
import SignUp from './Pages/SingUpPage'
import Posts from './Pages/PostsPage'
import SellItem from './Pages/SellPage'
import Home from './Pages/HomePage'
import {useState} from 'react'

const App = () => {
  const [tokenResponse, setTokenResponse] = useState('')

  return (
    <>
      <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/SignIn" element={<SignIn setTokenResponse={setTokenResponse}/>}/>
      <Route path='/SignUp' element={<SignUp setTokenResponse={setTokenResponse}/>}/>
      <Route path='/Posts' element={<Posts tokenResponse={tokenResponse}/>}/>
      <Route path='/Sell' element={<SellItem tokenResponse={tokenResponse}/>}/>
    </Routes>
    </>
  )
}

export default App
