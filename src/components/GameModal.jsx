import React from 'react';
import { Modal, Button, ListGroup, Row, Col } from 'react-bootstrap';
const GameModal = ({ show, onHide, fullGame}) => {
    return (
        <>
            {fullGame && (
                <Modal centered size='lg' show={show} onHide={onHide} className='custom-modal'>
                    <Modal.Header closeButton>
                        <Modal.Title className='fs-5'>
                            {fullGame.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col xs={12} md={6} className='p-1'>
                                <img src={fullGame.thumbnail} className='img-fluid w-100 h-100' alt='game_img' />
                            </Col>
                            <Col xs={12} md={6} className='d-none d-md-block p-1 mt-1'>
                                <ListGroup>
                                    <ListGroup.Item className="list-group-item-no-bullet">Genero: {fullGame.genre}</ListGroup.Item>
                                    <ListGroup.Item className="list-group-item-no-bullet">Plataforma: {fullGame.platform}</ListGroup.Item>
                                    <ListGroup.Item className="list-group-item-no-bullet">Por: {fullGame.publisher}</ListGroup.Item>
                                    <ListGroup.Item className="list-group-item-no-bullet">Desarrolladora: {fullGame.developer}</ListGroup.Item>
                                    <ListGroup.Item className="list-group-item-no-bullet">Lanzamiento: {fullGame.release_date}</ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='p-1 mt-2 fs-6'>
                                <h5>Description:</h5>
                                <p className='modal-description'>{fullGame.description}</p>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" href={fullGame.game_url} target='_blank'>
                            More
                        </Button>
                        <Button variant="secondary" onClick={onHide}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}

        </>
    );
};

export default GameModal;
