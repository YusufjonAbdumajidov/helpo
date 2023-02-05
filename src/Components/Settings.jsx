import React from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from '../features/theme/themeSlice';

const Settings = () => {
  const dispatch = useDispatch();
  return (
    <div className='settingsContainer'>
      <button onClick={() => dispatch(changeColor())}>Change color</button>
    </div>
  )
}

export default Settings