import React, { useEffect } from 'react'
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";
 
export const Logout = () => {
    const { LogoutUser } = useAuth();
  
    
  useEffect(() =>{
    LogoutUser();
  },[LogoutUser]);

  return <Navigate to = "/login"/>
      

      {/* auth.jsx se sab kuch hoga ispe hi sab kuch depand hai like contexxt api hai */}
}

