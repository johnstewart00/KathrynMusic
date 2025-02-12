"use client";
import { HeaderButton } from "./HeaderButton";
export default function Header(props: any) {
  return (
    <div className="bg-gray-100 overflow-x-auto flex whitespace-nowrap">
      <HeaderButton href="/">Home</HeaderButton>

      <HeaderButton href="/about">About</HeaderButton>

      <HeaderButton href="/trivia">Trivia Game</HeaderButton>
    </div>
  );
}
