import React, { useContext } from 'react'
import { useLocation , Navigate} from 'react-router-dom'
import {  AuthContext } from '../AuthenticationCRUD/Authentication'


export const NotPrivateroute = ({ children}) => {
    const { currentUser } = useContext(AuthContext)
    const location = useLocation()
    console.log(currentUser)
    return currentUser ? 
    <Navigate to='/Homepage' state ={{ path: location.pathname }} /> : children
 
}

