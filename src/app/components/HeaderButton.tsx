"use client";
import Link from "next/link";
import { ReactNode } from "react";

export const HeaderButton = ({
  href,
  children,
}: {
  href: string;

  children: string;
}) => {
  return (
    <Link
      className="px-3 py-1 hover:bg-secondary active:bg-gray-400 hover:text-white rounded-md m-2"
      href={href}
    >
      {children}
    </Link>
  );
};

export default HeaderButton;
