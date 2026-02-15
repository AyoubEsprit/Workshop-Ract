import { useState, useEffect } from "react";
import { Row, Alert } from "react-bootstrap";
import Event from "./Event";
import eventsData from "../events.json";

function Events() {
  const [events, setEvents] = useState(eventsData);
  const [showAlert, setShowAlert] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  // Cycle de vie : montage
  useEffect(() => {
    console.log("Composant monté");

    setTimeout(() => {
      setShowWelcome(true);
    }, 1000);

    setTimeout(() => {
      setShowWelcome(false);
    }, 4000);

    return () => {
      console.log("Composant démonté");
    };
  }, []);

  // Fonction Book
  const buy = (id) => {
    setEvents(
      events.map((e) =>
        e.id === id && e.nbTickets > 0
          ? {
              ...e,
              nbParticipants: e.nbParticipants + 1,
              nbTickets: e.nbTickets - 1,
            }
          : e
      )
    );

    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  // Fonction Like / Dislike
  const toggleLike = (id) => {
    setEvents(
      events.map((e) =>
        e.id === id ? { ...e, like: !e.like } : e
      )
    );
  };

  return (
    <>
      {showWelcome && (
        <Alert variant="info">Bienvenue dans la gestion des événements</Alert>
      )}

      {showAlert && (
        <Alert variant="success">
          You have booked an event
        </Alert>
      )}

      <Row className="justify-content-center">
        {events.map((e) => (
          <Event
            key={e.id}
            {...e}
            buy={buy}
            toggleLike={toggleLike}
          />
        ))}
      </Row>
    </>
  );
}

export default Events;
