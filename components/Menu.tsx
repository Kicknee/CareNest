import React from "react";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { LuUsers, LuUser, LuLogOut, LuSettings } from "react-icons/lu";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <IoHomeOutline className="menu-icon" />,
        label: "Home",
        href: "/",
      },
      {
        icon: <LuUsers className="menu-icon" />,
        label: "Users",
        href: "/users",
      },
      {
        icon: <LuUser className="menu-icon" />,
        label: "Profile",
        href: "/profile",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: <LuSettings className="menu-icon" />,
        label: "Settings",
        href: "/settings",
      },
      {
        icon: <LuLogOut className="menu-icon" />,
        label: "Logout",
        href: "/logout",
      },
    ],
  },
];
export default function Menu() {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((menu) => (
        <div className="flex flex-col gap-2" key={menu.title}>
          <span className="my-4 hidden text-[16px] font-light text-white lg:block">
            {menu.title}
          </span>
          {menu.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-center gap-2 py-2 text-white lg:justify-start [&>.menu-icon]:size-[30px]"
            >
              {item.icon}
              <p className="hidden text-[20px] lg:block">{item.label}</p>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
