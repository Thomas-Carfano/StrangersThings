import './App.css'
import NavBar from './Components/NavBar'
import {Routes, Route} from 'react-router-dom'
import SignIn from './Pages/LoginPage'
import SignUp from './Pages/SingUpPage'
import Posts from './Pages/PostsPage'

const App = () => {


  return (
    <>
      <NavBar/>
    <Routes>
      <Route path="/SignIn" element={<SignIn/>}/>
      <Route path="/SignUpPage" element={<SignUp/>}/>
      <Route path='/Posts/' element={<Posts/>}/>
      <Route index/>
    </Routes>
    </>
  )
}

export default App
