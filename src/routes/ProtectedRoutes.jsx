import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({isUserLogin , children}) => {

    if(!isUserLogin){
        return <Navigate to='/login' />
    }
  return children
}

export default ProtectedRoutes