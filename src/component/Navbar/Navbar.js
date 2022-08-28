import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./Navbar.css";

const Navigasi = () => {
  return (
    <div>
      <div className="navBackground">
        <Navbar expand="lg">
          <Container className="navbar-dark nav">
            <Navbar.Brand href="#home">Digital Library</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Beranda</Nav.Link>
                <Nav.Link href="#link">Tentang Kami</Nav.Link>
                <Nav.Link href="#link">Daftar Buku</Nav.Link>
                <Nav.Link href="#link">Artikel</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Navigasi;
