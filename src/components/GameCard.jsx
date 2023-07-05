import { Card, Badge, Stack } from 'react-bootstrap';
import { React } from 'react';
{/* PARA IMPLEMENTAR DESPUES DEL MVP */}
const GameCard = ({ game, requestApi}) => {

    const handleImgClickFullGame = (event) => {
        const gameId = event.currentTarget.getAttribute('data-value');
        const endPoint = 'game?id=' + gameId;
        requestApi(endPoint, false, true);
    };

    return (
        <>
            <Card key={game.id} className='bg-secondary text-light zoom-in card-game'>
                <div className='gradle-container' data-value={game.id} onClick={handleImgClickFullGame}>
                    <Card.Img src={game.thumbnail} />
                </div>
                <Card.Body className='d-flex flex-column' >
                    <div className='d-flex justify-content-between'>
                        <Card.Title>{game.title}</Card.Title>
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