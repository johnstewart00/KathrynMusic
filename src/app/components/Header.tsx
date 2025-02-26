"use client";
import { HeaderButton } from "./HeaderButton";

export default function Header(props: any) {
  return (
    <div className="bg-primary overflow-x-auto flex whitespace-nowrap">
      <HeaderButton href="/">Home</HeaderButton>
      <span className="border-l border-gray-400 h-6 my-auto"></span>{" "}
      {/* Divider */}
      <HeaderButton href="/about">About</HeaderButton>
      <span className="border-l border-gray-400 h-6 my-auto"></span>{" "}
      {/* Divider */}
      <HeaderButton href="/trivia">Trivia Game</HeaderButton>
    </div>
  );
}
