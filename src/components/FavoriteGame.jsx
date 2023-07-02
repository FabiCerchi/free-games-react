import { useState } from 'react';
import { Button, Badge } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FavoriteButton from './FavoriteButton';

const FavoriteGame = ({ favGames, setFavGames }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                        <div key={game.id} style={{ height: '9rem' }} className='mt-1'>
                            <h5><strong>{game.title}</strong></h5>
                            <div className='d-flex'>
                                <img src={game.thumbnail} style={{ width: '10rem' }} />
                                <div className='ms-2 d-flex flex-column'>
                                    <div className='align-self-start' style={{ height: '4rem', width: '12rem' }}>
                                        <p style={{ height:'2.8rem', fontSize: '.6rem', overflow: 'hidden', textOverflow: 'ellipsis', }} className='m-0'>{game.short_description}</p>
                                        <Badge bg="secondary">{game.platform}</Badge>
                                    </div>
                                    <div className='mt-2 d-flex justify-content-between align-items-end'>
                                        <Badge bg="primary">{game.genre}</Badge>
                                        
                                        <FavoriteButton
                                            favGames={favGames}
                                            setFavGames={setFavGames}
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