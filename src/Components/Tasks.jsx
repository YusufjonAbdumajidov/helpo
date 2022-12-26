import React, { useState, useEffect } from 'react';
import Alert from './Alert';
import {  FaTrash } from 'react-icons/fa'

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }else{
    return []
  }
}


const Tasks = () => {
  const [name,setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const handleSubmit = e => {
    e.preventDefault();
    if(!name){
      showAlert(true, "danger", "Please enter value");
    }else{
      const newItem = {id: new Date().getTime().toString(), title: name};
      setList([...list, newItem]);
      setName("");
    }
  }

  const showAlert = (show=false, type="", msg="") => {
    setAlert({show, type, msg});
  }

  const clearList = () => {
    showAlert(true, 'danger', 'empty list');
    setList([]);
  }
  const removeItem = id => {
    showAlert(true, 'danger', 'item removed');
    setList(list.filter((item)=> item.id !== id));
  }

  useEffect(()=> {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  
  return (
    <div className='tasksContainer'>
      <h1>Your daily tasks</h1>
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}

      <form action='#' className='taskForm' onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder='write your task'
        className='taskBox'
        value={name}
        onChange={(e) => setName(e.target.value)}/>
        <button className='tasksBtn'>Add</button>
        <button type='button' className='clearBtn' onClick={clearList}>Clear</button>
      </form>

      {list.length > 0 ?
      <article className='taskContainer'>
        {list.map(item => {
          const {id,title} = item;
          return <article key={id} className="tasks">
            <p>{title}</p>
            <section className="itemBtns">
              <button type='button' className='deleteBtn' onClick={()=> removeItem(id)}>
                <FaTrash />
              </button>
            </section>
          </article>
        })}
      </article> : <p>No tasks yet</p>}
    </div>
  )
}

export default Tasks