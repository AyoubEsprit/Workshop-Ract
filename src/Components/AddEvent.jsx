import { useState } from "react";
import { addEvent } from "../service/api";
import { useNavigate } from "react-router-dom";

function AddEvent() {
  const [event, setEvent] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addEvent(event);
    navigate("/events");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setEvent({...event, name: e.target.value})}
      />
      <button type="submit">Add Event</button>
    </form>
  );
}

export default AddEvent;