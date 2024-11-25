"use client";

import "./styles/globals.css";
import Header from "./components/Header";
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
        <div className="bg-gray-100 ml-10 my-16 p-10">
          <div className="text-9xl">Kathryn Stewart</div>

          <div className="text-lg my-9">
            Life is better with an appreciation for the arts
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div
            className="bg-gray-100 m-0 p-10 w-max rounded-lg hover:bg-gray-200"
            onClick={() => handleScheduleApp()}
          >
            Schedule Piano Lesson Here
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-100">
        <div className="p-4 text-center">
          “A piano is a beautiful mechanism, but it’s also a magical one.” –
          Martha Grimes
        </div>
      </footer>
    </div>
  );
}
