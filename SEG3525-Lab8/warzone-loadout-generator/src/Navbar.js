
import {Link} from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap';


const AllNavbar = () => {
    return ( 

        <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">Warzone Loadout Generator</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/random">Random Loadout</Nav.Link>
          <Nav.Link href="#pricing">Popular Loadouts</Nav.Link>
          <Nav.Link href="#pricing">Make Loadout</Nav.Link>
          <Nav.Link href="#pricing">Bug Report</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
     );
}
 
export default AllNavbar;