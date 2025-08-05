import React from "react";
import Link from "next/link";
import {
  IoHomeOutline,
  IoUmbrellaOutline,
  IoTodayOutline,
  IoPersonCircleOutline,
  IoLogOutOutline,
} from "react-icons/io5";
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
        icon: <IoUmbrellaOutline className="menu-icon" />,
        label: "Babysitters",
        href: "/babysitters",
      },
      // {
      //   icon: <IoPeopleOutline className="menu-icon" />,
      //   label: "Parents",
      //   href: "/parents",
      // },
      {
        icon: <IoTodayOutline className="menu-icon" />,
        label: "Events",
        href: "/events",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: <IoPersonCircleOutline className="menu-icon" />,
        label: "Profile",
        href: "/profile",
      },
      {
        icon: <IoLogOutOutline className="menu-icon" />,
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
          <div className="mb-5"></div>
          {menu.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-center gap-2 py-2 text-white lg:justify-start [&>.menu-icon]:size-[30px]"
            >
              {item.icon}
              <p className="hidden text-[18px] lg:block">{item.label}</p>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
