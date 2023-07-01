import React from 'react';
import { Container, ListGroup, Card, Col } from 'react-bootstrap';

const Game = ({ game, favGames, setFavGames, type }) => {
    const { id, title, thumbnail, game_url, genre, plataform, publisher, release } = game;
    
    const addFavorite = (id) => {
        const favGame = favGames.filter( game => game.id === id)
        if (favGame.length === 0){
            setFavGames([...favGames, game])
        }
        console.log(favGames)
    };
    
    const removeFavorite = (id) => {
        const newFavGames = favGames.filter( game => game.id !== id)
        setFavGames(newFavGames)
        console.log(favGames)
    };
    return (
        <>
            <Card style={{ width: '24rem'}} key={id}>
                <Card.Img variant="top" src={thumbnail} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{genre}</ListGroup.Item>
                    <ListGroup.Item>{plataform}</ListGroup.Item>
                    <ListGroup.Item>{publisher}</ListGroup.Item>
                    <ListGroup.Item>{release}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#"
                        type='button'
                        onClick={() => addFavorite(id)}>Add Favorite</Card.Link>
                    <Card.Link href="#"
                        type="button"
                        onClick={() => removeFavorite(id)}>Remove Favorite</Card.Link>
                </Card.Body>
            </Card>
        </>
    );
};

export default Game;