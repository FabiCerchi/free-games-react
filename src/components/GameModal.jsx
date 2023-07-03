import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const GameModal = ({ show, onHide, fullGame }) => {
    return (
        <>
            {fullGame && (
                <Modal show={show} onHide={onHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>{fullGame.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Contenido del modal
                    </Modal.Body>
                    <Modal.Footer>
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
