
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

import Container from 'react-bootstrap/Container';

function NavBarHolder() {
  return (
    <Navbar className="p-3 " expand="lg">
      <Container fluid >
        {/* <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto justify-content-center">
            <Nav.Link href="/story">story</Nav.Link>
            <Nav.Link href="/showcase">showcase</Nav.Link>
            <Nav.Link href="/pricelist">pricelist</Nav.Link>
            <Nav.Link href="/book">book</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );

}
export default NavBarHolder;


    // <nav class="navbar navbar-expand-lg p-3">
    //     <div class="container-fluid">
    //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //             <span class="navbar-toggler-icon"></span>
    //         </button>
    //         <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
    //             <ul class="navbar-nav ">

    //                 <li class="nav-item">
    //                     <a class="nav-link" href="/story">OUR STORY</a>
    //                 </li>
    //                 <li class="nav-item">
    //                     <a class="nav-link" href="/showcase">SHOWCASE</a>
    //                 </li>
    //                 <li class="nav-item">
    //                     <a class="nav-link" href="/pricelist">PRICELIST</a>
    //                 </li>


    //                 <li class="nav-item">
    //                     <a class="nav-link" href="/book">BOOK APPOINTMENT</a>
    //                 </li>

    //             </ul>
    //         </div>
    //     </div>
    // </nav>



