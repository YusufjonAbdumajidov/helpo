import React, { useState } from 'react';

const User = () => {
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [stdID, setStdID] = useState("");
  const [studentList, setStudentList] = useState([]);

  const handleSubmit = e =>{
    e.preventDefault();
    if(name.length > 0 && major.length > 0 && stdID.length > 0){
  
      const newItem = {id: new Date().getTime().toString(), studentName: name, studentMajor: major, studentID: stdID};
      setStudentList([...studentList, newItem]);
      
      setName("");
      setMajor("");
      setStdID("");
    }else {
      console.log("Please fill the form")
    }
    
  }
  return (
    <div className='userContainer'>
      <h1>User Information</h1>
      <form action="#" onSubmit={handleSubmit}>
        <input type="text" name="fullname" id="fullname" placeholder=' your full name' value={name} onChange={(e)=> setName(e.target.value)}/>
        <input type="text" placeholder='major' value={major} onChange={(e)=> setMajor(e.target.value)}/>
        <input type="text" placeholder='you ID' value={stdID} onChange={(e)=> setStdID(e.target.value)}/>
        <button >submit</button>
      </form>

    
      {studentList.length > 0 ?  <div className="userInfo">
        {studentList.map((item)=> {
          console.log(item)
          return <section key={item.studentID}>
            <h2>Student Information</h2>
            <h3>Full Name: {item.studentName}</h3>
            <p>Major: {item.studentMajor}</p>
            <p>ID: {item.studentID}</p>
          </section>
        })}
      </div> : <p>Nothing added yet</p>}
      
    </div>
  )
}

export default User