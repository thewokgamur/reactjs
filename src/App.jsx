import './App.css';
import Profil from './assets/Aaa.png';
import keyboard from './assets/rexus.jpg';
import mouse from './assets/logitech.jpg';
import controller from './assets/xbox.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/home.jsx';
import Header from './header.jsx';
import HHeader from "./header";
import { Route, Link } from 'react-router-dom';

function Introduction({ nama, kelas }){
  return (

  <div className="App">
    <h1>halo, nama saya {nama} dan saya kelas {kelas} </h1>
  </div>
  );
}


function App() {
  return (
    <>
<Home />
    </>
  )
}

export default App