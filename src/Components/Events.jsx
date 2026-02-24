import { useState, useEffect } from "react";
import { Row, Alert } from "react-bootstrap";
import Event from "./Event";
import { getAllEvents, deleteEvent } from "../service/api";
import { updateEvent } from "../service/api";

function Events() {
  const [events, setEvents] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  // 🔵 Charger les événements depuis l'API
  useEffect(() => {
    console.log("Composant monté");

    loadEvents();

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

  // 🔵 Fonction pour charger la liste
  const loadEvents = async () => {
    try {
      const response = await getAllEvents();
      setEvents(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement :", error);
    }
  };

  // 🔴 Fonction Delete
  const handleDelete = async (id) => {
    try {
      await deleteEvent(id);
      loadEvents(); // recharger après suppression
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 2000);
    } catch (error) {
      console.error("Erreur suppression :", error);
    }
  };
  // 🟢 Fonction Update
  const toggleLike = async (id) => {
  try {
    const eventToUpdate = events.find((e) => e.id === id);

    const updatedEvent = {
      ...eventToUpdate,
      like: !eventToUpdate.like,
    };

    await updateEvent(id, updatedEvent);
    loadEvents();
  } catch (error) {
    console.error("Erreur Like :", error);
  }
};


  return (
    <>
      {showWelcome && (
        <Alert variant="info">
          Bienvenue dans la gestion des événements
        </Alert>
      )}

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
          />
        ))}
      </Row>
    </>
  );
}

export default Events;