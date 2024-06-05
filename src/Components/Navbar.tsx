// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logos from "../../Images/Logos/logo.png";
import america from "../../Images/Logos/american logo.png";
import newzealand from "../../Images/Logos/newzealandlogo.png";
import palestine from "../../Images/Logos/palestinelogo.png";
export default function Navbars() {
  return (
    <div>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/"><img src={logos} alt="Logo" style={{ maxWidth: '170px' }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 m-auto" 
            style={{ maxHeight: '300px', }}
            navbarScroll
          >
            <Nav.Link  href="/" className='ml-4'>Home</Nav.Link>
            <Nav.Link href="/about" className='ml-4'>About</Nav.Link>
            {/* <Nav.Link href="/services">Services</Nav.Link> */}
          
            <NavDropdown title="Services" id="navbarScrollingDropdown" className='ml-4'>
             
              <NavDropdown.Item href="#action4">
                Web Design and Development
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/simplewebdesign">
                Simple Web Design
              </NavDropdown.Item>
              <NavDropdown.Item href="/weborportal">
                Web Portal
              </NavDropdown.Item>
              <NavDropdown.Item href="/ecommercesolution">
                Ecommerce Solutions
              </NavDropdown.Item>
              <NavDropdown.Item href="/digitalmarketing">
                Digital Marketing
              </NavDropdown.Item>
              <NavDropdown.Item href="/logodesign">
                Logo Design
              </NavDropdown.Item>
              <NavDropdown.Item href="/mobileapp">
                Mobile App
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Industries" className='ml-4'>Industries</Nav.Link>
            <Nav.Link href="/protfolio" className='ml-4'>Protfolio</Nav.Link>
            <Nav.Link href="/pricing" className='ml-4'>Pricing</Nav.Link>
            <Nav.Link href="/contact" className='ml-4'>Contact Us</Nav.Link>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <div className="d-none d-lg-flex">
        <Navbar.Brand>
          <img src={america} alt="america" style={{ maxWidth: '50px' }} />
        </Navbar.Brand>
        <Navbar.Brand>
          <img src={newzealand} alt="New Zealand" style={{ maxWidth: '50px' }} />
        </Navbar.Brand>
        <Navbar.Brand>
          <img src={palestine} alt="Palestine" style={{ maxWidth: '50px' }} />
        </Navbar.Brand>
      </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  );
}
