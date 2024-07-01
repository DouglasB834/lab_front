"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

export const Lang = () => {
  const { lang } = useParams();

  return (
    <div className="group flex items-center">
      <button>{lang}</button>
      <ul className="absolute top-14 hidden flex-fol gap-2 group-hover:flex group-hover:flex-col">
        <li>
          <Link href={"/en-US"}>en-US</Link>
        </li>
        <li>
          <Link href={"/pt-BR"}>pt-BR</Link>
        </li>
      </ul>
    </div>
  );
};
