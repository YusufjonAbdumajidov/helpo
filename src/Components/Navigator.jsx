import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, BiUser, FaTasks, AiOutlineFileAdd,
AiOutlineCalculator, TiWeatherCloudy, GiGamepadCross, FiSettings } from '../assets/icons/icons'
import { useDispatch, useSelector } from 'react-redux';

const Navigator = () => {
  const dispatch = useDispatch();
  const { randomColor } = useSelector((store) => store.theme);

  return (
    <>
    <div className="navigatorContainer" style={{backgroundColor: `${randomColor}`}}>
        <span><Link to='/'><AiOutlineHome className='navIcon'/></Link></span> 
        <Link to='/User'><BiUser className='navIcon'/></Link>
        <Link to='/Tasks'>< FaTasks className='navIcon'/></Link>
        <Link to='/calculator'><AiOutlineCalculator className='navIcon'/></Link>
        <Link to='/Weather'><TiWeatherCloudy className='navIcon'/></Link>
        {/* <Link to='/courses'>< AiOutlineFileAdd className='navIcon'/></Link> */}
        <Link to='/game'><GiGamepadCross className='navIcon'/></Link>
        <Link to='/Settings'><FiSettings className='navIcon'/></Link>   
    </div>
    </>
  )
}

export default Navigator
