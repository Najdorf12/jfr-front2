import axios from "./axios";

const handleRequest = async (requestFn) => {
  try {
    const response = await requestFn();
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error response from server:", error.response.data);
      throw new Error(`Server error: ${error.response.status}`);
    } else if (error.request) {
      console.error("No response received:", error.request);
      throw new Error("No response received from server");
    } else {
      console.error("Error setting up request:", error.message);
      throw new Error(`Request error: ${error.message}`);
    }
  }
};

export const getEvents = async () => {
  return handleRequest(() => axios.get("/events"));
};

export const createEvent = async (event) => {
  return handleRequest(() => axios.post("/events", event));
};

export const updateEvent = async (event) => {
  return handleRequest(() => axios.put(`/events/${event._id}`, event));
};

export const deleteEvent = async (eventId) => {
  return handleRequest(() => axios.delete(`/events/${eventId}`));
};