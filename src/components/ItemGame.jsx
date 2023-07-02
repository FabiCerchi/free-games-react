import React from 'react';
import FavoriteButton from './FavoriteButton';
import { Badge, Pagination } from 'react-bootstrap';

const ItemGame = ({ game, favGames, setFavGames}) => {
    return (
        <>
            <div className="d-flex bg-secondary mt-2" style={{ height: '8rem' }} key={game.key}>
                <img src={game.thumbnail} alt="" />
                <div className='ms-3'>
                    <h3>{game.title}</h3>
                    <p className='m-0'>{game.short_description}</p>
                    <h5><Badge bg="primary">{game.genre}</Badge></h5>
                </div>
                <FavoriteButton
                    favGames={favGames}
                    setFavGames={setFavGames}
                    game={game}
                />
            </div>
        </>
    );
};

export default ItemGame;