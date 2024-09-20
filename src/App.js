import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Rough from './components/Rough';
import Login from './components/Login/Login';




function App() {
  
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Page1/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='hospital-lists' element={<Page2/>}/>
      <Route path='personal-info' element={<Page3/>}/>
      <Route path='doctors-list' element={<Page4/>}/>
      <Route path='book-urslot' element={<Page5/>}/>
      <Route path='date' element={<Rough/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

