import { Card, Col, Button } from "react-bootstrap";
import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";

const images = {
  "event1.jpg": event1,
  "event2.jpg": event2,
};

function Event({
  id,
  name,
  description,
  price,
  nbTickets,
  nbParticipants,
  img,
  like,
  buy,
  toggleLike,
}) {
  return (
    <Col md={6} className="mb-4 d-flex justify-content-center">
      <Card style={{ maxWidth: "350px" }}>
        <Card.Img
          variant="top"
          src={images[img]}
          style={{ height: "180px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Price : {price}</Card.Text>
          <Card.Text>Tickets : {nbTickets}</Card.Text>
          <Card.Text>Participants : {nbParticipants}</Card.Text>

          <Button
            variant={nbTickets === 0 ? "secondary" : "primary"}
            disabled={nbTickets === 0}
            onClick={() => buy(id)}
            className="me-2"
          >
            {nbTickets === 0 ? "Sold Out" : "Book an event"}
          </Button>

          <Button
            variant={like ? "danger" : "outline-danger"}
            onClick={() => toggleLike(id)}
          >
            {like ? "Dislike" : "Like"}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Event;
