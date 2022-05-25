
import React, { useContext } from 'react'
import { useLocation , Navigate} from 'react-router-dom'
import {  AuthContext } from '../AuthenticationCRUD/Authentication'

export const Privateroute = ({children}) => {
    const {currentUser} = useContext(AuthContext)
    const location = useLocation()

    return !currentUser ? <Navigate to='/Login' state ={{ path: location.pathname }} /> : children
 
}

