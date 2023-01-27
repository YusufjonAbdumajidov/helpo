import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClockCircle, AiOutlineCalendar } from '../assets/icons/icons';
import image from "../assets/images/unknown_profile.jpg";
import { openClock, closeClock } from '../features/clock/clockSlice';
import Clock from './Clock';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const { isOpen } = useSelector((store)=> store.clock);
  const dispatch = useDispatch();
  return <nav>
    <div className="logo">
        <h2>helpo</h2>
    </div>
    <div className="navIcons">
        <span onClick={()=> {
          dispatch(openClock())
        }}><AiOutlineClockCircle /></span> 
        {/* <span><AiOutlineCalendar /></span>  */}
        {/* <img src={image} alt="" /> */}
        <Link to='/User'><img src={image} alt="" /></Link>
    </div>
    {isOpen && <Clock />}
  </nav>
}

export default Navbar