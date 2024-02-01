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

function App() {
    return (
      <>
      <Header />
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
      </>
    )
  }
  
  export default App