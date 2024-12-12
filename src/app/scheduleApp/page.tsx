"use client";

import { useState } from "react";
import Header from "../components/Header";
import { GoDash } from "react-icons/go";

interface Availability {
  day: string;
  startTime: string;
  endTime: string;
}

const axios = require("axios");

export default function ScheduleApp() {
  const [schedule, setSchedule] = useState<Availability[]>([]);
  const days: string[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  const addAvailability = () => {
    setSchedule([...schedule, { day: "", startTime: "", endTime: "" }]);
  };

  const updateAvailability = (
    index: number,
    field: keyof Availability,
    value: string
  ) => {
    const updatedSchedule = [...schedule];
    updatedSchedule[index][field] = value;
    setSchedule(updatedSchedule);
  };

  const removeAvailability = (index: number) => {
    setSchedule(schedule.filter((_, i) => i !== index));
  };

  const sendEmail = async (emailData: any) => {
    const apiUrl =
      "https://po4fhi3mpc.execute-api.us-east-1.amazonaws.com/prod/send-email";

    try {
      const response = await axios.post(apiUrl, emailData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Email sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleSubmit = () => {
    // Get the values from the form fields
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;

    // Validate the inputs
    if (!name || !phone || schedule.length === 0) {
      alert("Please fill in all fields and add at least one availability.");
      return;
    }

    // Construct the object expected by the Lambda function
    const userObject = {
      name,
      phone,
      schedule,
    };

    // Log the user object for debugging
    console.log("User Object:", userObject);

    // Call the sendEmail function with the constructed object
    sendEmail(userObject);
  };

  return (
    <div>
      <Header />
      <h1 className="text-center text-5xl p-8">Schedule Piano Lessons</h1>
      <p className="mx-4 text-xl">Enter your Name and Phone Number.</p>
      <form className="bg-gray-100 p-4 mx-4 my-4 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Name Field */}
          <div className="flex flex-col md:flex-row md:items-center">
            <label
              htmlFor="name"
              className="text-gray-700 md:mr-4 mb-1 md:mb-0"
            >
              Name:
            </label>
            <input
              id="name"
              className="flex-grow p-2 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
            />
          </div>

          {/* Phone Number Field */}
          <div className="flex flex-col md:flex-row md:items-center">
            <label
              htmlFor="phone"
              className="text-gray-700 md:mr-4 mb-1 md:mb-0"
            >
              Phone Number:
            </label>
            <input
              id="phone"
              className="flex-grow p-2 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
            />
          </div>
        </div>
      </form>

      <p className="mx-4 text-xl">
        Select a time(s) that you would be available for a piano lesson.
      </p>
      <div className="p-4 space-y-4">
        {schedule.map((availability, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0 bg-gray-100 p-4 rounded-lg"
          >
            <select
              className="p-2 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={availability.day}
              onChange={(e) => updateAvailability(index, "day", e.target.value)}
            >
              <option value="">Select Day</option>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
            <div className="flex flex-row items-center">
              <div className="flex flex-col mx-2">
                <label
                  htmlFor={`startTime-${index}`}
                  className="text-gray-700 text-sm mb-1"
                >
                  Start Time
                </label>
                <input
                  id={`startTime-${index}`}
                  type="time"
                  className="p-2 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={availability.startTime}
                  onChange={(e) =>
                    updateAvailability(index, "startTime", e.target.value)
                  }
                />
              </div>

              <GoDash className="mt-5 text-gray-700 text-lg" />

              <div className="flex flex-col mx-2">
                <label
                  htmlFor={`endTime-${index}`}
                  className="text-gray-700 text-sm mb-1"
                >
                  End Time
                </label>
                <input
                  id={`endTime-${index}`}
                  type="time"
                  className="p-2 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={availability.endTime}
                  onChange={(e) =>
                    updateAvailability(index, "endTime", e.target.value)
                  }
                />
              </div>
            </div>

            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              onClick={() => removeAvailability(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={addAvailability}
        >
          Add Availability
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
