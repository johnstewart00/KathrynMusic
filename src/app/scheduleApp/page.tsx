"use client";

import { useState } from "react";
import Header from "../components/Header";
import { GoDash } from "react-icons/go";
import { FaCheck } from "react-icons/fa6";
import { useRouter } from "next/navigation";

interface Availability {
  day: string;
  startTime: string;
  endTime: string;
}

const axios = require("axios");

export default function ScheduleApp() {
  const [schedule, setSchedule] = useState<Availability[]>([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const days: string[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  const router = useRouter();

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
    setShowConfirmation(true);
  };

  const handleClose = () => {
    setShowConfirmation(false);
    return router.push(`/`);
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
            className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 bg-gray-100 p-4 rounded-lg"
          >
            <select
              className="h-min mt-7 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="bg-primary h-min text-white px-4 py-2 mt-9 rounded-lg hover:bg-secondary"
              onClick={() => removeAvailability(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        <button
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary"
          onClick={addAvailability}
        >
          Add Availability
        </button>
        <button
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary"
          onClick={handleSubmit}
        >
          Submit
        </button>
        {showConfirmation && (
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:size-10">
                      <FaCheck />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3
                        className="text-base font-semibold text-gray-900"
                        id="modal-title"
                      >
                        Submission Success
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Your preference has been submitted successfully. I
                          will get back to you within a few days to confirm your
                          availability and find a time that works best.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 text-white inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-secondary sm:mt-0 sm:w-auto"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
