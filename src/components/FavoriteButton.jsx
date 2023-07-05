import React from 'react';
import { Badge } from 'react-bootstrap';
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
        game.fav = false
        return game
    };
    
    return (
        <>
            {
                !game.fav ? (
                    <Badge
                        className='favorite-button'
                        bg="success"
                        onClick={() => addFavorite(game.id)}
                    >
                    Favoritos
                    </Badge>
                ) : (
                    <Badge
                        className='favorite-button'
                        bg='danger'
                        onClick={() => removeFavorite(game.id)}
                    >
                    Remover
                    </Badge>
                )
            }
        </>
    );
};
export default FavoriteButton;

