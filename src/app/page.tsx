"use client";

import "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleScheduleApp = () => {
    console.log("Clicked!!");
    return router.push(`/scheduleApp`);
  };
  return (
    <div className="bg-white-100 flex flex-col w-screen h-screen">
      <Header />

      {/* Main Content */}
      <div className="flex-grow">
        <div className="bg-gray-100 ml-10 my-16 p-10 rounded-md">
          <div className="md:flex md:justify-between items-center">
            {/* Left: Name and tagline */}
            <div className="flex-1 pr-10">
              <div className="text-9xl">Kathryn Stewart</div>
              <div className="text-lg my-9">
                Life is better with an appreciation for the arts
              </div>
            </div>

            {/* Right: Quote */}
            <div className="bg-white p-4 shadow-md rounded-lg w-1/3 text-right">
              <div className="text-sm italic">
                “A piano is a beautiful mechanism, but it’s also a magical one.”
              </div>
              <div className="text-sm mt-2">– Martha Grimes</div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex items-center justify-center">
          <div
            className="bg-gray-100 m-0 p-10 w-max rounded-lg shadow-md hover:bg-gray-200"
            onClick={() => handleScheduleApp()}
          >
            Schedule Piano Lessons Here
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
