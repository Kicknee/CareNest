import React from "react";
import Link from "next/link";
const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "",
        label: "Home",
        href: "/",
      },
      {
        icon: "",
        label: "Babysitters",
        href: "/babysitters",
      },
      {
        icon: "",
        label: "Parents",
        href: "/parents",
      },
      {
        icon: "",
        label: "Events",
        href: "/events",
      },
      {
        icon: "",
        label: "Messages",
        href: "/messages",
      },
      {
        icon: "",
        label: "Announcements",
        href: "/announcements",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      { icon: "", label: "Profile", href: "/profile" },
      { icon: "", label: "Settings", href: "/settings" },
      { icon: "", label: "Logout", href: "/logout" },
    ],
  },
];
export default function Menu() {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((menu) => (
        <div className="flex flex-col gap-2" key={menu.title}>
          <span className="hidden lg:block text-gray-400 font-light">
            {menu.title}
          </span>
          {menu.items.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
