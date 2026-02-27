import { useState, useEffect } from "react";
import { Row, Alert } from "react-bootstrap";
import Event from "./Event";
import { getAllEvents, deleteEvent, updateEvent } from "../service/api";

function Events() {

  const [events, setEvents] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const response = await getAllEvents();
      setEvents(response.data);
    } catch (error) {
      console.error("Erreur chargement :", error);
    }
  };

  const handleDelete = async (id) => {
    await deleteEvent(id);
    loadEvents();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  const toggleLike = async (id) => {
    const eventToUpdate = events.find((e) => e.id === id);

    const updatedEvent = {
      ...eventToUpdate,
      like: !eventToUpdate.like,
    };

    await updateEvent(id, updatedEvent);
    loadEvents();
  };

  return (
    <>
      {showAlert && (
        <Alert variant="success">
          Opération réussie
        </Alert>
      )}

      <Row className="justify-content-center">
        {events.map((e) => (
          <Event
            key={e.id}
            {...e}
            onDelete={handleDelete}
            toggleLike={toggleLike}
          />
        ))}
      </Row>
    </>
  );
}

export default Events;