import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navber from './components/navber/Navber';
import Card from './components/card/Card';
import Table from './components/table/Table';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

;

function App() {
  return (
    <>
      <BrowserRouter>
      {/* header component  */}

      <Header></Header>
      <Sidebar></Sidebar>
        {/* Render the Navber outside of Routes so it appears on all pages */}
        <Navber />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/card' element={<Card />} />
          <Route path='/table' element={<Table />} />
        </Routes>

        {/* footer component  */}
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App

