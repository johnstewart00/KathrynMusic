"use client";
import { ReactNode } from "react";

export const HeaderButton = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: ReactNode;
}) => {
  return (
    <button
      className="px-3 py-3 hover:bg-gray-200 active:bg-gray-400"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default HeaderButton;
