import React from 'react';
import { Badge } from 'react-bootstrap';
const FavoriteButton = ({ game, addFavorite, removeFavorite }) => {
    return (
        <>
            {
                !game.fav ? (
                    <Badge
                        className='favorite-button'
                        bg="success"
                        onClick={() => addFavorite(game)}
                    >
                    Favorite
                    </Badge>
                ) : (
                    <Badge
                        className='favorite-button'
                        bg='danger'
                        onClick={() => removeFavorite(game)}
                    >
                    Remove
                    </Badge>
                )
            }
        </>
    );
};
export default FavoriteButton;

