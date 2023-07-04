import React from 'react';
import { Modal, Button, Container, Image, ListGroup } from 'react-bootstrap';

const GameModal = ({ show, onHide, fullGame }) => {
    return (
        <>
            {fullGame && (
                <Modal centered size='lg' show={show} onHide={onHide} className='custom-modal'>
                    <Modal.Header closeButton>
                        <Modal.Title>{fullGame.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <h5>{fullGame.short_description}</h5>
                            <div className='mt-2'>
                                <div className='image-container'>
                                    <Image src={fullGame.thumbnail} className='mb-2' cover />
                                </div>
                                <div className=''>
                                    <ListGroup>
                                        <ListGroup.Item className="list-group-item-no-bullet">Genero: {fullGame.genre}</ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-no-bullet">Plataforma: {fullGame.platform}</ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-no-bullet">Por: {fullGame.publisher}</ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-no-bullet">Desarrolladora: {fullGame.developer}</ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-no-bullet">Lanzamiento: {fullGame.release_date}</ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </div>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" href={fullGame.game_url} target='_blank'>
                            Jugar
                        </Button>
                        <Button variant="secondary" onClick={onHide}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}

        </>
    );
};

export default GameModal;
