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
    <div className="flex h-screen flex-col items-center p-8 text-3xl text-white">
      <header className="grid grid-cols-[1fr_2fr] grid-rows-[60px_30px_150px_45px]">
        <Image src="/logo_m.png" alt="Logo" width={90} height={90} />
        <Link href="/" className="text-5xl md:text-6xl">
          <h1>Carenest</h1>
        </Link>
        <div className="col-start-2 row-[2_/_span_1] flex items-center justify-center gap-1 text-2xl">
          <p className="text-[80%]">Find your nanny</p>
          <IoMenu size={30} />
        </div>
        <nav className="hidden flex-1 items-center justify-between px-9 md:flex">
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
            className="bg-secondary rounded-[30px] px-7 py-2 text-xl"
          >
            Sign up
          </Link>
        </nav>
        <button className="bg-accent col-2 row-3 hidden place-self-start self-center rounded-4xl px-7 py-2 text-2xl">
          Book Now
        </button>
        {/*searchbar*/}
        <Image
          src="/bed_bg.png"
          alt="bed icon"
          width={90}
          height={90}
          className="col-end-2 row-[3_/_span_1] self-end"
        />
        <div className="relative col-span-full row-4 flex size-full self-end overflow-hidden rounded-4xl bg-white">
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
          className="absolute top-2/15 right-0 -z-3"
        />
      </header>

      <p className="mt-10 text-3xl">Browse</p>
      <div className="mt-3 flex w-screen flex-wrap justify-center gap-5">
        <NannyCard />
        <NannyCard />
        <NannyCard />
        <NannyCard />
      </div>
      <div className="from-primary to-secondary min-h-screen; fixed top-0 left-0 -z-10 size-full bg-gradient-to-b to-50%"></div>
    </div>
  );
}
