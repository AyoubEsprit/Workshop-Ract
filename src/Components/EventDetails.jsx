import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEventById } from "../service/api";
import { Card, Container } from "react-bootstrap";

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const loadEvent = async () => {
      try {
        const response = await getEventById(id);
        setEvent(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    loadEvent();
  }, [id]);

  if (!event) {
    return <h2 className="text-center mt-4">Loading...</h2>;
  }

  return (
    <Container className="mt-4 d-flex justify-content-center">
      <Card style={{ width: "400px" }}>
        <Card.Body>
          <Card.Title>{event.name}</Card.Title>
          <Card.Text>{event.description}</Card.Text>
          <Card.Text>Price: {event.price}</Card.Text>
          <Card.Text>Tickets: {event.nbTickets}</Card.Text>
          <Card.Text>Participants: {event.nbParticipants}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default EventDetails;