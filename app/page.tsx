import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const menuItems = [
    {
      label: "Our Services",
      href: "/our-services",
    },
    {
      label: "Why Carenest",
      href: "/parents",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Become a sitter",
      href: "/become-a-sitter",
    },
    {
      label: "Log in",
      href: "/log-in",
    },
  ];
  return (
    <div className="text-3xl bg-gradient-to-b from-primary to-50% to-secondary h-screen p-8">
      <header className="flex justify-between text-white">
        <Link href="/" className="text-6xl">
          <h1>Carenest</h1>
        </Link>
        <nav className="flex flex-1 justify-between items-center px-9">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xl ${item.href === "/log-in" && "underline"}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/sign-up"
            className="py-2 px-7 bg-secondary rounded-[30px] text-xl"
          >
            Sign up
          </Link>
        </nav>
      </header>
      <div className="w-75 grid grid-cols-3 grid-rows-3">
        <Image
          src="/logo_m.png"
          alt="Logo"
          fill
          className="row-span-2 col-span-2"
        />
      </div>
    </div>
  );
}
