import './App.css'
import './assets/bootstrap-5.2.0-beta1-dist/js/bootstrap.min.js'
import {Routes , Route, useNavigate } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import LoginForm from './Pages/LoginForm'
import {Context } from './context/UserContext'
import { useContext, useEffect } from 'react'
import ProtectedRoutes from './routes/ProtectedRoutes'

function App() {
  const navigate = useNavigate()
  let {isUserLogin} = useContext(Context)
  useEffect(()=>{
    if(isUserLogin){
      navigate('/')
    }
    
  } , [isUserLogin])

  return (
    <div className="container-fluid App">
      <Routes>
            <Route path='/' element={<ProtectedRoutes isUserLogin={isUserLogin}>
              <Dashboard />
            </ProtectedRoutes>} />
            <Route path='/login' element={<LoginForm />} />
            
      </Routes>

    </div>
  )
}

export default App
