import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const ProctectedRoute = ({children,allowedRoles}) => {
    const {token,role} = useSelector((state) => state.currentUser[0]) || [];
    const isAllowed=allowedRoles.includes(role);
    const authRoute= token && isAllowed ? children:<Navigate to="/login" replace={true} />
  return authRoute;
}

export default ProctectedRoute
