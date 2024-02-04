import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from '../../Login/LoginButton';
import './NavBar.css'
const  NavBar = () => {
  return (
    <>
      <Navbar  bg="light" data-bs-theme="light" >
        <Container className='nav'>
          <Navbar.Brand href="#home">Bike The Big Apple</Navbar.Brand>
          <Nav className="navBarLoginButton">
            <Login/>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;