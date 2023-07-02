import React from 'react';
import { Navbar, Nav, Button, Container, Form, NavDropdown, Row, Col } from 'react-bootstrap';
import Favorites from "./Favorites";
const Header = ({ favGames, setFavGames }) => {
    return (
        <>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#">Free Game</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavDropdown title="Categories" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#action1">Top 2023</Nav.Link>
                            <Nav.Link href="#action2">Contact</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search Game"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                            <Favorites
                                favGames={favGames}
                                setFavGames={setFavGames}
                            />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="hero bg-dark text-light d-flex align-items-center text-center" style={{border:'1px solid black', height:'24rem'}}>
                <Container>
                    <Row>
                        <Col>
                            <h1 className="hero-title">Bienvenido a mi Aplicación</h1>
                            <p className="hero-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec nisl ac felis sollicitudin consequat.
                            </p>
                            <Button variant="primary" className="hero-button">Comenzar</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};


export default Header;