import React from 'react'
import './User.scss'
import {  Link   } from "react-router-dom";
import { setCurentUser } from './userslice';
import { useNavigate } from 'react-router-dom';

export default function User() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setCurentUser({
        id:'',
        email:''
    })
    navigate('/');

  }
  function logout(){
    alert("Đã Thoát")
  }
  return (
    <div className="user">
      <div className="user_profile">
        <div className="user_profile_img">
        <img alt="Qries" src="https://www.w3schools.com/howto/img_avatar.png"
         width="60%" height="70px"></img>
        </div>
        <Link to="/">
        <div className="user_profile_logout" onClick={logout}>
          <p>Thoát</p>

        </div>
        </Link>
      </div>
    </div>
  )
}
