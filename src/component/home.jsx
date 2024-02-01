import React from 'react';
import Profil from '../assets/Aaa.png';
import keyboard from '../assets/rexus.jpg';
import mouse from '../assets/logitech.jpg';
import controller from '../assets/xbox.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header.jsx';
import { useState } from 'react';

function Introduction({ nama, kelas }){
    return (
  
    <div className="App">
      <h1>halo, nama saya {nama} dan saya kelas {kelas} </h1>
    </div>
    );
  }
  
  
  function Home() {
    const [products,setproduct,] = useState(0)
    
    function increaseOrderCount(){
        setproduct(products + 1)
    }

    function decreaseOrderCount(){
        if (products > 0){
            setproduct(products - 1)
        }
    }

    return (
      <>
      <Header />
      <img src={Profil} alt=""/>
      <Introduction nama="1" kelas="rpl-Xi_a"/>
      <div className='card-product'>
      <Container>
  
  <Row>
  <Col>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={keyboard} />
    <Card.Body>
      <Card.Title>Rexus Legionare MX10 Keyboard Gaming</Card.Title>
      <Card.Text>
        RP 499.000
      </Card.Text>
      <div className='Home'>
      <Button variant="black" onClick={decreaseOrderCount}>-</Button>
      <span>{products}</span>
      <Button variant="black" onClick={increaseOrderCount}>+</Button>
      </div>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  </Col>
  
  <Col>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={controller} />
    <Card.Body>
      <Card.Title>XBOX Controller</Card.Title>
      <Card.Text>
        RP 700.000
      </Card.Text>
      <Button variant="primary" href="/nested/">Go somewhere</Button>
    </Card.Body>
  </Card>
  </Col>
  
  </Row>
  
  </Container>
  </div>
      </>
    )
  }
  
  export default Home