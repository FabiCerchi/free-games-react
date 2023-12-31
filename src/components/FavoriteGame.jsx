import { useState } from 'react';
import { Button, Badge } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FavoriteButton from './FavoriteButton';

const FavoriteGame = ({ addFavorite,removeFavorite, requestApi,favGames }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleImgClickFullGame = (event) => {
        const gameId = event.currentTarget.getAttribute('data-value');
        const endPoint = 'game?id=' + gameId;
        requestApi(endPoint, false, true);
    };
    return (
        <>
            <Button variant="outline-primary" onClick={handleShow} className="me-2">
                Favorites
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement='end' bg="dark" data-bs-theme="dark">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title >
                        <strong>Favorites</strong>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {favGames.map((game) => (
                        <div key={game.id} className='mt-1 favorite-game'>
                            <h5><strong>{game.title}</strong></h5>
                            <div className='d-flex'>
                                <div className='gradle-container' data-value={game.id} onClick={handleImgClickFullGame}>
                                    <img src={game.thumbnail} alt='game_img' className='favorite-img' />
                                </div>
                                <div className='ms-2 d-flex flex-column'>
                                    <div className='align-self-start favorite-body'>
                                        <p className='m-0 favorite-p'>{game.short_description}</p>
                                        <Badge bg="light text-dark">{game.platform}</Badge>
                                    </div>
                                    <div className='mt-2 d-flex justify-content-between align-items-end'>
                                        <Badge bg="primary">{game.genre}</Badge>
                                        <FavoriteButton
                                            removeFavorite={removeFavorite}
                                            addFavorite={addFavorite}
                                            game={game}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default FavoriteGame;