import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default function NewModal({ show, handleClose, handleSave }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('1'); 
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    const newItem = {
      nev: name,
      kateg_id: parseInt(category), // Convert string to number
      kep: image,
      leiras: description,
    };
    handleSave(newItem);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Új étel hozzáadása</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Név</Form.Label>
            <Form.Control
              type="text"
              placeholder="Adja meg az étel nevét"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formCategory">
            <Form.Label>Kategória</Form.Label>
            <Form.Control
              as="select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="1">Főétel</option>
              <option value="2">Leves</option>
              <option value="3">Desszert</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formImage">
            <Form.Label>Kép</Form.Label>
            <Form.Control
              type="text"
              placeholder="Adja meg a kép URL-jét"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Leírás</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Adja meg az étel leírását"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Mégsem
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
