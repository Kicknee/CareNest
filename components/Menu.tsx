import React from "react";
import Link from "next/link";
import {
  IoHomeOutline,
  IoUmbrellaOutline,
  IoPeopleOutline,
  IoTodayOutline,
  IoChatboxEllipsesOutline,
  IoNotificationsOutline,
  IoPersonCircleOutline,
  IoSettingsOutline,
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
      {
        icon: <IoPeopleOutline className="menu-icon" />,
        label: "Parents",
        href: "/parents",
      },
      {
        icon: <IoTodayOutline className="menu-icon" />,
        label: "Events",
        href: "/events",
      },
      {
        icon: <IoChatboxEllipsesOutline className="menu-icon" />,
        label: "Messages",
        href: "/messages",
      },
      {
        icon: <IoNotificationsOutline className="menu-icon" />,
        label: "Announcements",
        href: "/announcements",
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
        icon: <IoSettingsOutline className="menu-icon" />,
        label: "Settings",
        href: "/settings",
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
          <span className="hidden lg:block text-gray-400 font-light">
            {menu.title}
          </span>
          {menu.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              //   className="[&>.lucide]:size-[50px]"
              className="flex items-center justify-center lg:justify-start gap-2 text-gray-500 py-2 [&>.menu-icon]:size-[20px]"
            >
              {item.icon}
              <p className="hidden lg:block">{item.label}</p>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
