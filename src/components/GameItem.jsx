import React from 'react';
import FavoriteButton from './FavoriteButton';
import { Badge } from 'react-bootstrap';

const GameItem = ({ game, favGames, setFavGames }) => {
    return (
        <>
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
        </>
    );
};

export default GameItem;