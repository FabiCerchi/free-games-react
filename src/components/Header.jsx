import React from 'react';
import { Navbar, Nav, Button, Container, Form, NavDropdown, Row, Col } from 'react-bootstrap';
import FavoriteGame from "./FavoriteGame";
import './styles.css';

const Header = ({ favGames, setFavGames, releaseDateAlphabeticalRelevance, getSpecificGame }) => {
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
                            <Nav.Link 
                                href='#gameslist'
                                onClick={ () => releaseDateAlphabeticalRelevance('release-date')}
                                >Top 2023</Nav.Link>
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
                            <FavoriteGame
                                favGames={favGames}
                                setFavGames={setFavGames}
                                getSpecificGame={getSpecificGame}
                            />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="hero bg-dark text-light d-flex align-items-center text-center background border-bottom" style={{ height:'22rem'}}>
                <Container>
                    <h1><strong>Good Game</strong></h1>
                </Container>
            </div>
        </>
    );
};


export default Header;