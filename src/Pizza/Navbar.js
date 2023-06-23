import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"
import {BiCurrentLocation, BiRadioCircleMarked, BiRadioCircle } from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg'

function ColorSchemesExample() {
  return (
    <>
    
      <Navbar className='Navbar_bg'  variant="dark">
        <Container>
        <div>
          <Navbar.Brand href="#home">Domino's Pizza </Navbar.Brand>
         </div> 
         <div>
          <Nav className="me-auto">
            <Nav.Link href="#home"> <BiRadioCircleMarked /> Delivery</Nav.Link>
            <Nav.Link href="#features"> <BiRadioCircle /> Pick Up/Dine-IN</Nav.Link>
            <Nav.Link href="#pricing"> <BiCurrentLocation /> Location </Nav.Link>
            <Nav.Link href="#pricing"> < CgProfile /> MY ACCOUNT</Nav.Link>
          </Nav>
         </div>
        </Container>
      </Navbar>

  
    </>
  );
}

export default ColorSchemesExample;