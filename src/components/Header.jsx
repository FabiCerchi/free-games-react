import React from 'react';
import { Navbar, Nav, Container, Form, NavDropdown } from 'react-bootstrap';
import FavoriteGame from "./FavoriteGame";
import './styles.css';

const Header = ({ favGames, setFavGames, requestApi }) => {

    const handleItemClickCategory = (event) => {
        const value = event.target.getAttribute("value");
        const title = event.target.innerText;
        const endPoint = 'games?category=' + value;
        requestApi(endPoint, title, false);
    };
    const handleItemClickPlatform = (event) => {
        const value = event.target.getAttribute("value");
        const title = event.target.innerText;
        const endPoint = 'games?platform=' + value;
        requestApi(endPoint, title, false);
    };
    const handleItemClickSortBy = (event) => {
        const value = event.target.getAttribute("value");
        const title = event.target.innerText;
        const endPoint = 'games?sort-by=' + value;
        requestApi(endPoint, title, false);
    };

    return (
        <>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark" className='fixed-top'>
                <Container>
                    <Navbar.Brand href="./index.html">Free Games</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavDropdown title="Categories" id="navbarScrollingDropdown">
                                <NavDropdown.Item value="mmorpg" href='#gamelist' onClick={handleItemClickCategory}>MMORPG</NavDropdown.Item>
                                <NavDropdown.Item value="shooter" onClick={handleItemClickCategory}>Shooter</NavDropdown.Item>
                                <NavDropdown.Item value="moba" onClick={handleItemClickCategory}>MOBA</NavDropdown.Item>
                                <NavDropdown.Item value="anime" onClick={handleItemClickCategory}>Anime</NavDropdown.Item>
                                <NavDropdown.Item value="strategy" onClick={handleItemClickCategory}>Strategy</NavDropdown.Item>
                                <NavDropdown.Item value="fantasy" onClick={handleItemClickCategory}>Fantasy</NavDropdown.Item>
                                <NavDropdown.Item value="sci-fi" onClick={handleItemClickCategory}>Sci-Fi</NavDropdown.Item>
                                <NavDropdown.Item value="action" onClick={handleItemClickCategory}>Action</NavDropdown.Item>
                                <NavDropdown.Item value="racing" onClick={handleItemClickCategory}>Racing</NavDropdown.Item>
                                <NavDropdown.Item value="fighting" onClick={handleItemClickCategory}>Fighting</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Platform" id="navbarScrollingDropdown">
                                <NavDropdown.Item value="pc" onClick={handleItemClickPlatform}>PC</NavDropdown.Item>
                                <NavDropdown.Item value="browser" onClick={handleItemClickPlatform}>Browser</NavDropdown.Item>
                                <NavDropdown.Item value="all" onClick={handleItemClickPlatform}>All</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="SortBy" id="navbarScrollingDropdown">
                                <NavDropdown.Item value="release-date" onClick={handleItemClickSortBy}>Release Date</NavDropdown.Item>
                                <NavDropdown.Item value="popularity" onClick={handleItemClickSortBy}>Popularity</NavDropdown.Item>
                                <NavDropdown.Item value="alphabetical" onClick={handleItemClickSortBy}>Alphabetical</NavDropdown.Item>
                                <NavDropdown.Item value="relevance" onClick={handleItemClickSortBy}>Relevance</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <FavoriteGame
                                favGames={favGames}
                                setFavGames={setFavGames}
                                requestApi={requestApi}
                            />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="hero bg-dark text-light d-flex align-items-center text-center background border-bottom" style={{ height: '28rem' }}>
                <Container>
                    <h1><strong>Good Game</strong></h1>
                </Container>
            </div>
        </>
    );
};


export default Header;