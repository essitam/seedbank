import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
// import { v4 as uuidv4 } from "uuid";
export const AddEvent = () => {
  //this is a bit like setState
  const [name, setName] = useState("");
  const [sponges, setSponges] = useState("");

  const { addEvent } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newEvent = {
      name,
      sponges
      //   location,
      //   event_type
    };
    addEvent(newEvent);
  };
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="event_type">Event Type</label>
          <input
            type="text"
            value={sponges}
            onChange={e => setSponges(e.target.value)}
            placeholder="Enter event type..."
          />
          <button className="btn">Add Event</button>
        </div>
      </form>
    </div>
  );
};
