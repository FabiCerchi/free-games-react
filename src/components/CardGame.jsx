import {Card} from 'react-bootstrap';
import FavoriteButton from './FavoriteButton';

const CardGame = ({ game, favGames, setFavGames}) => {
    return (
        <>
            <Card style={{ width: '24rem' }} key={game.id} className='bg-secondary text-light'>
                <Card.Img variant="top" src={game.thumbnail} />
                <Card.Body className='d-flex justify-content-between'>
                    <Card.Title>{game.title}</Card.Title>
                    <FavoriteButton
                        favGames={favGames}
                        setFavGames={setFavGames}
                        game={game}
                    />
                </Card.Body>
            </Card>
        </>
    );
};

export default CardGame;