import { Card, Col, Button } from "react-bootstrap";
import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import { Link } from "react-router-dom";

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
  onDelete,
  toggleLike
}) {

  return (
    <Col md={6} className="mb-4 d-flex justify-content-center">
      <Card style={{ maxWidth: "350px" }}>
        <Card.Img
          variant="top"
          src={images[img] || event1}
          style={{ height: "180px", objectFit: "cover" }}
        />

        <Card.Body>
          <Card.Title>
            <Link to={`/events/${id}`} style={{ textDecoration: "none" }}>
              {name}
            </Link>
          </Card.Title>

          <Card.Text>{description}</Card.Text>
          <Card.Text>Price : {price}</Card.Text>
          <Card.Text>Tickets : {nbTickets}</Card.Text>
          <Card.Text>Participants : {nbParticipants}</Card.Text>

          <Button
            variant={like ? "danger" : "outline-danger"}
            onClick={() => toggleLike(id)}
            className="me-2"
          >
            {like ? "Dislike" : "Like"}
          </Button>

          <Button
            variant="danger"
            onClick={() => onDelete(id)}
            className="me-2"
          >
            Delete
          </Button>

          <Button
            variant="warning"
            as={Link}
            to={`/update/${id}`}
          >
            Update
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Event;