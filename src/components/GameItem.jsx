import React from 'react';
import FavoriteButton from './FavoriteButton';
import { Badge, Row, Col, Container } from 'react-bootstrap';

const GameItem = ({ game, removeFavorite, addFavorite, requestApi}) => {

    const handleImgClickFullGame = (event) => {
        const gameId = event.currentTarget.getAttribute('data-value');
        const endPoint = 'game?id=' + gameId;
        requestApi(endPoint, false, true);
    };

    return (
        <>
            <Container>
                <Row className="bg-secondary mt-2 text-light h-auto">
                    <Col xs={12} md={3} className="p-0 d-flex align-items-strech">
                        <div className="gradle-container w-100">
                            <img src={game.thumbnail} alt="game_img" className="img-fluid w-100 h-100" data-value={game.id} onClick={handleImgClickFullGame} />
                        </div>
                    </Col>
                    <Col xs={12} md={9} className="bg-secondary p-2">
                        <div className="content d-flex flex-column">
                            <div className='d-flex align-items-center justify-content-between'>
                                <h4>{game.title} </h4>
                                <FavoriteButton
                                    removeFavorite={removeFavorite}
                                    addFavorite={addFavorite}
                                    game={game}
                                />
                            </div>
                            <p>{game.short_description}</p>
                            <div wrap>
                                <Badge bg="primary" className='ms-1'>{game.genre}</Badge>
                                <Badge bg="light text-dark" className='ms-1'>{game.platform}</Badge>
                                <Badge bg="warning" className='ms-1'>{game.release_date}</Badge>
                                <a href={game.game_url} target="_blank" rel="noopener noreferrer">
                                    <Badge bg="dark" className="ms-1">Official Page</Badge>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default GameItem;
