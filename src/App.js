import Representatives from './Representative/Representatives';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Senators from './components/Senators';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path ='/representatives/:state' element={<Representatives/>}/>
          <Route path ='/senators/:state' element={<Senators/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
