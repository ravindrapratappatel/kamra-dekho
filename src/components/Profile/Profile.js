import React from 'react'
import Navbar from '../Navbar.js/Navbar';
import Footer from '../Footer/Footer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from "react-redux";
function Profile() {
  const {user: currentUser} = useSelector((state)=> state.auth)
  return (
    <div className='flex flex-col justify-between h-[100%]'>
    <div>
    <Navbar />
    </div>
  
    <div className='flex flex-col justify-center items-center mt-[60px]'>
    <AccountCircleIcon fontSize='large' />
    <h2 className='m-[6px]' >UserName: {currentUser.username}</h2>
    <h2 className='m-[6px]'>Email: {currentUser.email} </h2>
    <h2 className='m-[4px]'>User Since 2022</h2>
    </div>
    <div class="absolute inset-x-0 bottom-0 h-16" >
    <Footer />
    </div>
    
    </div>
  )
}

export default Profile;