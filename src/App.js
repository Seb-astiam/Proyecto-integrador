import React from 'react';
import './App.css';
import Nav from './components/Nav/nav'
import {Link, Route, Routes} from 'react-router-dom'
import About from './components/Paginas/About';
import Home from './components/Paginas/Home';
import Detail from './components/Paginas/Detail';

function App() {
   
   return (
      
      <div className='App'>
         <Nav >
            <Link to='/'>Home</Link> 
            <Link to='/About'>About</Link> 
         </Nav>
         <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/About' element={<About/>}></Route>
            <Route exact path='/Detail/:id' element={<Detail/>}></Route>
         </Routes>
      </div>
   );
}

export default App;
