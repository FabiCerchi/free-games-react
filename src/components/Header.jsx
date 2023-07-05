import React from 'react';
import { Navbar, Nav, Container, Form, NavDropdown } from 'react-bootstrap';
import FavoriteGame from "./FavoriteGame";
import './styles.css';
import logo from "../images/icon.png"
const Header = ({ removeFavorite, addFavorite, requestApi, favGames }) => {

    const handleItemClickCategory = (event) => {
        const value = event.target.getAttribute("value");
        const title = event.target.innerText;
        const url = 'games?category=' + value;
        requestApi(url, title, false);
    };
    const handleItemClickPlatform = (event) => {
        const value = event.target.getAttribute("value");
        const title = event.target.innerText;
        const url = 'games?platform=' + value;
        requestApi(url, title, false);
    };
    const handleItemClickSortBy = (event) => {
        const value = event.target.getAttribute("value");
        const title = event.target.innerText;
        const url = 'games?sort-by=' + value;
        requestApi(url, title, false);
    };

    return (
        <>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark" className='fixed-top'>
                <Container>
                    <Navbar.Brand href="./index.html">
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="logo"
                        />
                        Free Games
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 nav-custom"
                            navbarScroll
                        >
                            <NavDropdown title="Categories" id="navbarScrollingDropdown">
                                <NavDropdown.Item value="mmorpg" href="./index.html#gamelist" onClick={handleItemClickCategory}>MMORPG</NavDropdown.Item>
                                <NavDropdown.Item value="shooter" href="./index.html#gamelist" onClick={handleItemClickCategory}>Shooter</NavDropdown.Item>
                                <NavDropdown.Item value="moba" href="./index.html#gamelist" onClick={handleItemClickCategory}>MOBA</NavDropdown.Item>
                                <NavDropdown.Item value="anime" href="./index.html#gamelist" onClick={handleItemClickCategory}>Anime</NavDropdown.Item>
                                <NavDropdown.Item value="strategy" href="./index.html#gamelist" onClick={handleItemClickCategory}>Strategy</NavDropdown.Item>
                                <NavDropdown.Item value="fantasy" href="./index.html#gamelist" onClick={handleItemClickCategory}>Fantasy</NavDropdown.Item>
                                <NavDropdown.Item value="sci-fi" href="./index.html#gamelist" onClick={handleItemClickCategory}>Sci-Fi</NavDropdown.Item>
                                <NavDropdown.Item value="action" href="./index.html#gamelist" onClick={handleItemClickCategory}>Action</NavDropdown.Item>
                                <NavDropdown.Item value="racing" href="./index.html#gamelist" onClick={handleItemClickCategory}>Racing</NavDropdown.Item>
                                <NavDropdown.Item value="fighting" href="./index.html#gamelist" onClick={handleItemClickCategory}>Fighting</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Platform" id="navbarScrollingDropdown">
                                <NavDropdown.Item value="pc" href="./index.html#gamelist" onClick={handleItemClickPlatform}>PC</NavDropdown.Item>
                                <NavDropdown.Item value="browser" href="./index.html#gamelist" onClick={handleItemClickPlatform}>Browser</NavDropdown.Item>
                                <NavDropdown.Item value="all" href="./index.html#gamelist" onClick={handleItemClickPlatform}>All</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="SortBy" id="navbarScrollingDropdown">
                                <NavDropdown.Item value="release-date" href="./index.html#gamelist" onClick={handleItemClickSortBy}>Release Date</NavDropdown.Item>
                                <NavDropdown.Item value="popularity" href="./index.html#gamelist" onClick={handleItemClickSortBy}>Popularity</NavDropdown.Item>
                                <NavDropdown.Item value="alphabetical" href="./index.html#gamelist" onClick={handleItemClickSortBy}>Alphabetical</NavDropdown.Item>
                                <NavDropdown.Item value="relevance" href="./index.html#gamelist" onClick={handleItemClickSortBy}>Relevance</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form>
                            <FavoriteGame
                                removeFavorite={removeFavorite}
                                addFavorite={addFavorite}
                                favGames={favGames}
                                requestApi={requestApi}
                            />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="hero bg-dark text-light d-flex align-items-center text-center background border-bottom gradient-bg">
                <Container>
                    <h1><strong>Have a good game!</strong></h1>
                    <p>Track what you've played and search for what to play next!</p>
                </Container>
            </div>
        </>
    );
};
export default Header;