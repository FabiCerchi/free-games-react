import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Favorites = ({ favGames, setFavGames }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const removeFavorite = (id) => {
        const game = favGames.find(game => game.id === id)
        game.fav = false
        const newFavGames = favGames.filter(game => game.id !== id)
        setFavGames(newFavGames)
        return game
    };

    return (
        <>
            <Button variant="outline-success" onClick={handleShow} className="me-2">
                Favoritos
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement='end' bg="dark" data-bs-theme="dark">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title >
                        <strong>Favoritos</strong>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {favGames.map((game) => (
                        <div key={game.id} style={{ height: '8rem' }} className='m-1'>
                            <h5><strong>{game.title}</strong></h5>
                            <img src={game.thumbnail} style={{ width: '10rem' }} />
                            <Button
                                className='m-3'
                                variant="danger"
                                type="button"
                                onClick={() => removeFavorite(game.id)}>
                                Remover
                            </Button>
                        </div>

                    ))}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Favorites;