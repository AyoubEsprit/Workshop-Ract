import axios from "axios";

const url = "http://localhost:3001/events";

// Get all events
export const getAllEvents = async () => {
  return await axios.get(url);
};

// Get event by id
export const getEventById = async (id) => {
  return await axios.get(`${url}/${id}`);
};

// Add event
export const addEvent = async (event) => {
  return await axios.post(url, event);
};

// Update event
export const updateEvent = async (id, event) => {
  return await axios.put(`${url}/${id}`, event);
};

// Delete event
export const deleteEvent = async (id) => {
  return await axios.delete(`${url}/${id}`);
};