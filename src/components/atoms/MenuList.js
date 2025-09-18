"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Icon from "@/core/utils/icon";
import menuOptions from "@/core/constants/menuOptions";

function MenuList() {
  const [clicked, setClicked] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const current = menuOptions.find((item) => item.href === pathname);
    if (current) setClicked(current.id);
  }, [pathname]);

  return (
    <>
      {menuOptions.map((option) => {
        const isActive = clicked === option.id;

        return (
          <Link
            key={option.id}
            href={option.href}
            className={`${
              isActive ? "text-primary" : "text-textColor"
            } md:hover:scale-110 md:transition-all md:duration-[0.2s] flex items-center gap-x-2`}
            onClick={() => setClicked(option.id)}
          >
            <Icon
              name={option.icon}
              className="block md:hidden w-[16px] h-[16px] ml-1"
              fill={
                option.icon === "home"
                  ? isActive
                    ? "#fdb713"
                    : "#282828"
                  : "none"
              }
              stroke={
                option.icon === "home"
                  ? "none"
                  : isActive
                  ? "#fdb713"
                  : "#282828"
              }
            />
            {option.title}
          </Link>
        );
      })}
    </>
  );
}

export default MenuList;
