import Navbar from "./Components/Navbar";
import Navigator  from "./Components/Navigator";
import { Calculator, Game, User, Courses, Home, Settings, Tasks, Weather } from "./Components/importPages/pages.jsx"
import { Routes, Route,  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
       <main>
          <div><Navigator /></div> 
          <div className="mainContainer">
            <Routes>
              <Route path='/User' element={ <User /> }/>
              <Route path='/Courses' element={<Courses />}/>
              <Route path='/calculator' element={ <Calculator /> }/>
              <Route path='/game' element={<Game />}/>
              <Route path='/' element={ <Home /> }/>
              <Route path='/Settings' element={<Settings />}/>
              <Route path='/Tasks' element={ <Tasks /> }/>
              <Route path='/Weather' element={<Weather />}/>
            </Routes>
          </div>
       </main>
    </div>
  );
}

export default App;
