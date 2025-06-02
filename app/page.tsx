import Image from "next/image";
import Link from "next/link";
import { IoMenu, IoSearch } from "react-icons/io5";
import NannyCard from "@/components/NannyCard";

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
    <div className="text-3xl h-screen p-8 flex flex-col items-center text-white">
      <header className="grid grid-cols-[1fr_2fr] grid-rows-[60px_30px_150px_45px]">
        <Image src="/logo_m.png" alt="Logo" width={90} height={90} />
        <Link href="/" className="text-5xl md:text-6xl">
          <h1>Carenest</h1>
        </Link>
        <div className="text-2xl col-start-2 row-[2_/_span_1] flex items-end gap-1 justify-center">
          <p className="text-[23px]">Find your nanny</p>
          <IoMenu size={30} />
        </div>
        <nav className="hidden md:flex flex-1 justify-between items-center px-9">
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
        <button className="hidden row-3 col-2 self-center place-self-start rounded-4xl px-7 py-2 text-2xl bg-accent">
          Book Now
        </button>
        {/*searchbar*/}
        <Image
          src="/bed_bg.png"
          alt="bed icon"
          width={90}
          height={90}
          className="row-[3_/_span_1] col-end-2 self-end"
        />
        <div className="row-4 col-span-full self-end relative size-full bg-white rounded-4xl flex overflow-hidden">
          <input type="text" className="w-[80%]" />
          <button className="bg-accent w-[20%] px-4">
            <IoSearch size={35} />
          </button>
        </div>
        <Image
          src="/sun_bg.png"
          width={90}
          height={90}
          alt="sun icon"
          className="-z-3 absolute right-0 top-2/15"
        />
      </header>

      <h5>Browser</h5>
      <div className="flex flex-wrap gap-5 mt-3 justify-center w-screen">
        <NannyCard />
        <NannyCard />
        <NannyCard />
        <NannyCard />
      </div>
      <div
        className="-z-10 fixed top-0 left-0 size-full bg-gradient-to-b from-primary to-50% to-secondary min-h-screen;
"
      ></div>
    </div>
  );
}
