"use client";

import Link from "next/link";

type NavLinkProps = {
  label: string;
  href: string;
  newTab?: boolean;
};

export const NavLink = ({ label, href, newTab = false }: NavLinkProps) => {
  return (
    <Link
      href={href}
      target={newTab ? "_blank" : "_self"}
      className={"nav-link hover:opacity-60 transition-opacity"}
    >
      {label}
    </Link>
  );
};
