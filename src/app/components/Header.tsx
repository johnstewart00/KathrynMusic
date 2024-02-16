"use client";
import { HeaderButton } from "./HeaderButton";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  // @ts-ignore
  const onClick = ({ key }) => {
    console.log(`going to the ${key} page`);
    return router.push(`/${key}`);
  };
  return (
    <Box style = {{position: 'relative', top: 0, left: 0, width: '100%'}}>
      <HeaderButton onClick={() => onClick({ key: "" })}>Home</HeaderButton>

      <HeaderButton onClick={() => onClick({ key: "about" })}>
        About
      </HeaderButton>
      <HeaderButton onClick={() => onClick({ key: "media" })}>
        Media
      </HeaderButton>
      <HeaderButton onClick={() => onClick({ key: "contact" })}>
        Contact
      </HeaderButton>
      <HeaderButton onClick={() => onClick({ key: "resources" })}>
        Resources
      </HeaderButton>
    </Box>
  );
}
