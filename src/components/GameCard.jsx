import { Card, Badge, Stack } from 'react-bootstrap';
import FavoriteButton from './FavoriteButton';

const GameCard = ({ game, favGames, setFavGames }) => {
    return (
        <>
            <Card style={{ minHeight: '100%' }} key={game.id} className='bg-secondary text-light'>
                <Card.Img src={game.thumbnail} />
                <Card.Body className='d-flex flex-column'>
                    <div className='d-flex justify-content-between'>
                        <Card.Title>{game.title}</Card.Title>
                        <FavoriteButton
                            favGames={favGames}
                            setFavGames={setFavGames}
                            game={game}
                        />
                    </div>
                    <div className='mt-auto align-self-start'>
                        <Stack direction="horizontal" gap={1}>
                            <Badge bg="primary">{game.genre}</Badge>
                            <Badge bg="light text-dark">{game.platform}</Badge>
                        </Stack>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default GameCard;