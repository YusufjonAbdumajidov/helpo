import React from 'react';
import { GrClose } from "../assets/icons/icons";
import { closeClock } from '../features/clock/clockSlice';
import { useDispatch } from 'react-redux';

const Clock = () => {
    const dispatch = useDispatch();
  return (
    <div className='clockContainer'>
        <GrClose onClick={()=> {
            dispatch(closeClock())
        }} className='clockCloseBtn'/>
        clock
    </div>
  )
}

export default Clock