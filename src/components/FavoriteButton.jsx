import React from 'react';
import { Button } from 'react-bootstrap';
const FavoriteButton = ({ game, favGames, setFavGames }) => {

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
            {
                !game.fav ? (
                    <Button
                        className='d-flex justify-content-center align-items-center'
                        style={{ height: '1.3rem', width: '1.3rem' }}
                        variant='success'
                        type="button"
                        onClick={() => addFavorite(game.id)}
                    >
                        +
                    </Button>
                ) : (
                    <Button
                        className='d-flex justify-content-center align-items-center'
                        style={{ height: '1.3rem', width: '1.3rem' }}
                        variant='danger'
                        type="button"
                        onClick={() => removeFavorite(game.id)}
                    >
                        <span>-</span>
                    </Button>
                )
            }
        </>
    );
};
export default FavoriteButton;

