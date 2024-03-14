"use client";

import { Heading } from "./components/Heading";
import { Paragraph } from "./components/Paragraph";
import "./styles/globals.css";
import grandPiano from "../../public/grandPiano.png";
import Image from "next/image";
import Header from "./components/Header";
import { MuiBox } from "./components/Box";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleScheduleApp = () => {
    console.log("Clicked!!");
    return router.push(`/scheduleApp`);
  };
  return (
    <div style={{ position: "relative" }}>
      {/* Image */}
      <div style={{ position: "absolute", width: "100%", height: "100vh" }}>
        <Image
          src={grandPiano}
          alt="Grand Piano"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <Header position="absolute" />

      {/* Text Content */}
      <div style={{ position: "absolute", top: 100, left: 50 }}>
        <MuiBox>
          <Heading>Kathryn Stewart</Heading>
          <Paragraph hovercolor="white" padding="30px">
            Life is better with an appreciation for the arts
          </Paragraph>
        </MuiBox>
      </div>
      <div
        style={{
          position: "absolute",
          top: 200,
          left: 800,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <MuiBox>
          <div onClick={() => handleScheduleApp()}>
            <Paragraph>Schedule Piano Lesson Here</Paragraph>
          </div>
        </MuiBox>
      </div>
    </div>
  );
}
