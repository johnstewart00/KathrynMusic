"use client";

import { Color } from "../styles/colors";
import Header from "../components/Header";
import { MuiBox } from "../components/Box";
import { useState } from "react";
import { Paragraph } from "../components/Paragraph";
import { MuiButton } from "../components/Button";

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
      <MuiBox width="900px">
        <form onSubmit={handleSubmit}>
          <label>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Paragraph marginRight="10px" textcolor={Color.black}>
                First Name:{" "}
              </Paragraph>
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
              <Paragraph marginRight="10px" textcolor={Color.black}>
                First Name:{" "}
              </Paragraph>
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
              <Paragraph marginRight="10px" textcolor={Color.black}>
                Enter Days and Times that would work for your schedule:{" "}
              </Paragraph>
              <input
                type="text"
                value={schedule}
                onChange={(e) => setSchedule(e.target.value)}
              />
            </div>
          </label>
          <br />
          <MuiButton background_color={Color.lightPurple}>
            <input type="submit" value="Submit" />
          </MuiButton>
        </form>
      </MuiBox>
    </div>
  );
}
