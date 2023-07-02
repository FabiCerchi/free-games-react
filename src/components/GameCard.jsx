import { Card, Badge, Stack } from 'react-bootstrap';
import FavoriteButton from './FavoriteButton';

const GameCard = ({ game, favGames, setFavGames }) => {
    return (
        <>
            <Card style={{ width: '24rem' }} key={game.id} className='bg-secondary text-light'>
                <Card.Img variant="top" src={game.thumbnail} />
                <Card.Body >
                    <div className='d-flex justify-content-between'>
                        <Card.Title>{game.title}</Card.Title>
                        <FavoriteButton
                            favGames={favGames}
                            setFavGames={setFavGames}
                            game={game}
                        />
                    </div>
                    <Stack direction="horizontal" gap={2}>
                        <Badge bg="primary">{game.genre}</Badge>
                        <Badge bg="light text-dark">{game.platform}</Badge>

                    </Stack>
                </Card.Body>

            </Card>
        </>
    );
};

export default GameCard;