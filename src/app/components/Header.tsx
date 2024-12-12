"use client";
import { HeaderButton } from "./HeaderButton";
import { useRouter } from "next/navigation";
export default function Header(props: any) {
  const router = useRouter();
  const onClick = (key: string = "", title: string = "") => {
    console.log(`going to the ${key} page`);
    return router.push(`/${key}`);
  };
  return (
    <div className="bg-gray-100 overflow-x-auto flex whitespace-nowrap">
      <HeaderButton onClick={() => onClick("")}>Home</HeaderButton>

      <HeaderButton onClick={() => onClick("about")}>About</HeaderButton>
      {/* <HeaderButton onClick={() => onClick("media")}>
        <div className="text-black">Media</div>
      </HeaderButton>
      <HeaderButton onClick={() => onClick("contact")}>
        <div className="text-black">Contact</div>
      </HeaderButton>
      <HeaderButton onClick={() => onClick("resources")}>
        <div className="text-black">Resources</div>
  </HeaderButton> */}
      <HeaderButton onClick={() => onClick("trivia")}>Trivia Game</HeaderButton>
    </div>
  );
}
