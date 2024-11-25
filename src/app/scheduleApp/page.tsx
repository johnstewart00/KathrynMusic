"use client";

import { Color } from "../styles/colors";
import Header from "../components/Header";
import { useState } from "react";

export default function ScheduleApp() {
  // State to store form values
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [schedule, setSchedule] = useState("");

  // Function to handle form submission
  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { firstName, lastName, schedule });
  };

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100vh",
        backgroundColor: Color.lightGrey,
      }}
    >
      <Header />
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p>First Name: </p>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </label>
          <br />
          <label>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p>First Name: </p>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </label>
          <br />
          <label>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p>Enter Days and Times that would work for your schedule: </p>
              <input
                type="text"
                value={schedule}
                onChange={(e) => setSchedule(e.target.value)}
              />
            </div>
          </label>
          <br />
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
