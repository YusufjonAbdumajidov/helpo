import React from 'react'

const Tasks = () => {
  return (
    <div className='tasksContainer'>
      <h1>Your daily tasks</h1>

      <section>
        <input type="text" placeholder='write your task'/>
        <button className='tasksBtn'>Add</button>
      </section>
    </div>
  )
}

export default Tasks