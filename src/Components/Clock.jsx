import React, { useEffect, useState } from 'react';
import { GrClose } from "../assets/icons/icons";
import { closeClock } from '../features/clock/clockSlice';
import { useDispatch } from 'react-redux';




const Clock = () => {
  const dispatch = useDispatch();
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()));
  }, [dateState])
  
  return (
    <div className='clockContainer'>
        <GrClose onClick={()=> {
            dispatch(closeClock())
        }} className='clockCloseBtn'/>
        <div className="clockTime">
        <p className='time'>{dateState.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            second: '2-digit',
            hour12: false,
          })}</p>
          <p className='day'>{dateState.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}</p>
        </div>
    </div>
  )
}

export default Clock