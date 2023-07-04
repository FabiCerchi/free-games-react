import React from 'react';
import FavoriteButton from './FavoriteButton';
import { Badge, Stack, Row, Col, Container } from 'react-bootstrap';

const GameItem = ({ game, favGames, setFavGames, requestApi }) => {

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
                                    favGames={favGames}
                                    setFavGames={setFavGames}
                                    game={game} />
                            </div>
                            <p>{game.short_description}</p>
                        </div>
                        <Stack direction="horizontal" gap={1}>
                            <Badge bg="primary">{game.genre}</Badge>
                            <Badge bg="light text-dark">{game.platform}</Badge>
                            <Badge bg="warning">{game.release_date}</Badge>
                        </Stack>
                    </Col>
                </Row>
            </Container >
        </>
    );
};

export default GameItem;

{/*

            <div className="d-flex bg-secondary mt-3" style={{ height: '8rem' }} key={game.key}>
                <img src={game.thumbnail} alt="" />
                <div className='ms-3 d-flex flex-column justify-content-center'>
                    <h3 className='d-flex align-items-center'>{game.title}
                        <FavoriteButton
                            className="ms-5"
                            favGames={favGames}
                            setFavGames={setFavGames}
                            game={game}/></h3>
                    <p className='m-0'>{game.short_description}</p>
                    <h5>
                        <Badge bg="primary">{game.genre}</Badge>
                    </h5>
                </div>
            </div>

*/}