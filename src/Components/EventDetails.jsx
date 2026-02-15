import { useParams } from "react-router-dom";
import eventsData from "../events.json";

function EventDetails() {
  const { eventName } = useParams();

  const event = eventsData.find(
    (e) => e.name === eventName
  );

  if (!event) {
    return <h2>Event not found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <p>Price: {event.price}</p>
      <p>Tickets: {event.nbTickets}</p>
      <p>Participants: {event.nbParticipants}</p>
    </div>
  );
}

export default EventDetails;
