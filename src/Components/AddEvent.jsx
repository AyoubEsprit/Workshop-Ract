import { useState } from "react";
import { addEvent } from "../service/api";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";

function AddEvent() {
  const navigate = useNavigate();

  const [event, setEvent] = useState({
    name: "",
    description: "",
    price: "",
    nbTickets: "",
    nbParticipants: 0,
    img: "event1.jpg",
    like: false
  });

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addEvent(event);
    navigate("/events");
  };

  return (
    <Container className="mt-4">
      <h2>Add Event</h2>

      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={event.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={event.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={event.price}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Tickets</Form.Label>
          <Form.Control
            type="number"
            name="nbTickets"
            value={event.nbTickets}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Add Event
        </Button>

      </Form>
    </Container>
  );
}

export default AddEvent;