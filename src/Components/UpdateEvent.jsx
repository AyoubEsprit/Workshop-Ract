import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEventById, updateEvent } from "../service/api";
import { Form, Button, Container } from "react-bootstrap";

function UpdateEvent() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState({
    name: "",
    description: "",
    price: "",
    nbTickets: "",
    nbParticipants: ""
  });

  useEffect(() => {
    loadEvent();
  }, []);

  const loadEvent = async () => {
    const response = await getEventById(id);
    setEvent(response.data);
  };

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateEvent(id, event);
    navigate("/events");
  };

  return (
    <Container className="mt-4">
      <h2>Update Event</h2>

      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={event.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={event.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={event.price}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Tickets</Form.Label>
          <Form.Control
            type="number"
            name="nbTickets"
            value={event.nbTickets}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update Event
        </Button>

      </Form>
    </Container>
  );
}

export default UpdateEvent;