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
      className="px-3 py-3 hover:bg-gray-200 active:bg-gray-400 hover:text-primary"
      href={href}
    >
      {children}
    </Link>
  );
};

export default HeaderButton;
