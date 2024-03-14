"use client";
import { HeaderButton } from "./HeaderButton";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import { Paragraph } from "./Paragraph";

// @ts-ignore
export default function Header(props) {
  const router = useRouter();
  // @ts-ignore
  const onClick = ({ key }) => {
    console.log(`going to the ${key} page`);
    return router.push(`/${key}`);
  };
  return (
    <Box
      style={{
        position: props.position ? props.position : "relative",
        top: 0,
        left: 0,
        width: "100%",
      }}
    >
      <HeaderButton onClick={() => onClick({ key: "" })}>
        <Paragraph textcolor="black" padding="0" hovercolor="white">
          {" "}
          Home
        </Paragraph>
      </HeaderButton>

      <HeaderButton onClick={() => onClick({ key: "about" })}>
        <Paragraph textcolor="black" padding="0" hovercolor="white">
          {" "}
          About
        </Paragraph>
      </HeaderButton>
      <HeaderButton onClick={() => onClick({ key: "media" })}>
        <Paragraph textcolor="black" padding="0" hovercolor="white">
          {" "}
          media
        </Paragraph>
      </HeaderButton>
      <HeaderButton onClick={() => onClick({ key: "contact" })}>
        <Paragraph textcolor="black" padding="0" hovercolor="white">
          {" "}
          contact
        </Paragraph>
      </HeaderButton>
      <HeaderButton onClick={() => onClick({ key: "resources" })}>
        <Paragraph textcolor="black" padding="0" hovercolor="white">
          {" "}
          resources
        </Paragraph>
      </HeaderButton>
      <HeaderButton onClick={() => onClick({ key: "trivia" })}>
        <Paragraph textcolor="black" padding="0" hovercolor="white">
          {" "}
          trivia game
        </Paragraph>
      </HeaderButton>
    </Box>
  );
}
