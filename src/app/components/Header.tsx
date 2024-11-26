"use client";
import { HeaderButton } from "./HeaderButton";
import { useRouter } from "next/navigation";
export default function Header(props: any) {
  const router = useRouter();
  const onClick = (key: string = "") => {
    console.log(`going to the ${key} page`);
    return router.push(`/${key}`);
  };
  return (
    <div className="bg-gray-100 md:p-4 md:h-1/8 h-min overflow-x-auto">
      <HeaderButton onClick={() => onClick()}>
        <div className="text-black">Home</div>
      </HeaderButton>

      <HeaderButton onClick={() => onClick("about")}>
        <div className="text-black">About</div>
      </HeaderButton>
      <HeaderButton onClick={() => onClick("media")}>
        <div className="text-black">Media</div>
      </HeaderButton>
      <HeaderButton onClick={() => onClick("contact")}>
        <div className="text-black">Contact</div>
      </HeaderButton>
      <HeaderButton onClick={() => onClick("resources")}>
        <div className="text-black">Resources</div>
      </HeaderButton>
      <HeaderButton onClick={() => onClick("trivia")}>
        <div className="text-black">Trivia Game</div>
      </HeaderButton>
    </div>
  );
}
