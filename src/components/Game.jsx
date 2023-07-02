import React, { useState } from 'react';
import { Container, ListGroup, Card, Col, Button } from 'react-bootstrap';

const Game = ({ game, favGames, setFavGames, type }) => {
    const { id, title, thumbnail, game_url, genre, plataform, publisher, release } = game;

    const [isFavorite, setFavorite] = useState(false);


    const addFavorite = (id) => {
        const favGame = favGames.filter(game => game.id === id)
        if (favGame.length === 0) {
            game.fav = true
            setFavGames([...favGames, game])
        }
    };

    const removeFavorite = (id) => {
        const newFavGames = favGames.filter(game => game.id !== id)
        setFavGames(newFavGames)
        //
        game.fav = false
        return game
    };

    return (
        <>
            <Card style={{ width: '24rem' }} key={id} className='bg-secondary text-light'>
                <Card.Img variant="top" src={thumbnail} />
                <Card.Body className='d-flex justify-content-between'>
                    <Card.Title>{title}</Card.Title>
                    {
                        !game.fav ? (
                            <Button
                                className='d-flex justify-content-center align-items-center'
                                style={{ height: '30px', width: '30px' }}
                                variant='success'
                                type="button"
                                onClick={() => addFavorite(id)}
                            >
                                +
                            </Button>
                        ) : (
                            <Button
                                className='d-flex justify-content-center align-items-center'
                                style={{ height: '30px', width: '30px' }}
                                variant='danger'
                                type="button"
                                onClick={() => removeFavorite(id)}
                            >
                                <span>-</span>
                            </Button>
                        )
                    }
                </Card.Body>
            </Card>
        </>
    );
};

export default Game;