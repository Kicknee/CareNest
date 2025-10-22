"use client";

import Image from "next/image";
import Link from "next/link";
import {
  IoMenu,
  IoSearch,
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import NannyCard from "@/components/NannyCard";
import { useEffect, useState, useRef } from "react";
import SignInModal from "@/components/SignInModal";

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
export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const leftArrowRef = useRef<HTMLButtonElement | null>(null);
  const rightArrowRef = useRef<HTMLButtonElement | null>(null);
  const [showModal, setShowModal] = useState(false);
  const SCROLL_OFFSET = 270;

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({
      left: -SCROLL_OFFSET,
      behavior: "smooth",
    });
  };
  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({
      left: SCROLL_OFFSET,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const firstCardObserver = new IntersectionObserver(
      (entries) => {
        const firstCard = entries[0];
        if (!leftArrowRef.current) return;
        leftArrowRef.current.classList.toggle(
          "opacity-0",
          firstCard.isIntersecting,
        );
      },
      {
        threshold: 1,
      },
    );
    const lastCardObserver = new IntersectionObserver(
      (entries) => {
        const lastCard = entries[0];
        if (!rightArrowRef.current) return;
        rightArrowRef.current.classList.toggle(
          "opacity-0",
          lastCard.isIntersecting,
        );
      },
      {
        threshold: 1,
      },
    );

    firstCardObserver.observe(el.children[0]);
    lastCardObserver.observe(el.lastElementChild as HTMLDivElement);
  }, []);

  return (
    <main className="mx-auto flex w-full max-w-screen flex-col items-center p-8 text-3xl text-white xl:w-[1200px]">
      {showModal && <SignInModal onClose={() => setShowModal(false)} />}
      <header className="flex w-full items-center justify-center gap-2 md:items-baseline md:justify-around">
        <div className="relative size-[90px] md:hidden">
          <Image src="/logo_m.png" alt="Logo" fill />
        </div>
        <div className="md:flex">
          <Link href="/" className="md:text-[min(10vw, 70px)] text-5xl">
            <h1>Carenest</h1>
          </Link>
          <div className="flex items-center justify-center gap-1 text-2xl md:hidden">
            <p className="text-[80%] md:text-6xl">Find your nanny</p>
            <IoMenu size={30} />
          </div>
        </div>

        <nav className="hidden flex-1 items-center justify-around md:flex">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-lg ${item.href === "/log-in" && "underline"}`}
            >
              {item.label}
            </Link>
          ))}
          <button
            className="bg-secondary rounded-[30px] px-7 py-2 text-lg"
            onClick={() => setShowModal(true)}
          >
            Sign up
          </button>
        </nav>
      </header>
      <section className="mt-10 grid w-full grid-cols-[1fr_2fr_1fr]">
        <div className="relative hidden size-[200px] justify-self-center md:block">
          <Image src="/logo_m.png" alt="Logo" fill />
        </div>
        <div className="col-start-2 flex flex-col items-center justify-around">
          <p className="hidden text-[80%] md:block md:text-[min(10vw,42px)]">
            Find your nanny
          </p>
          <button className="bg-accent col-2 row-3 self-center rounded-4xl px-7 py-2 text-lg md:text-2xl">
            Book Now
          </button>
        </div>
        <div className="relative -z-3 hidden size-[min(20vw,200px)] md:block">
          <Image src="/sun_full_bg.png" fill alt="sun icon" />
        </div>
        <Image
          src="/sun_bg.png"
          width={90}
          height={90}
          alt="sun icon"
          className="absolute top-2/15 right-0 -z-3 md:hidden"
        />
        {/*searchbar*/}
        <div className="col-span-full row-2 flex flex-col items-center">
          <div className="relative size-[80px] -translate-x-[120%] md:size-[130px] md:translate-x-[220%] md:self-center">
            <Image src="/bed_bg.png" alt="bed icon" fill />
          </div>
          <div className="flex h-13 overflow-hidden rounded-4xl bg-white md:w-3xl">
            <input type="text" className="w-[85%] md:w-[75%]" />
            <button className="bg-accent flex w-[15%] items-center justify-around px-4 md:w-[25%]">
              <p className="hidden text-[25px] md:block">Search</p>
              <IoSearch size={30} />
            </button>
          </div>
        </div>
      </section>
      <section className="flex w-full flex-col items-center">
        {/*tiles section */}
        <p className="my-10 text-3xl md:text-5xl">Browse</p>
        <div className="flex w-full justify-center gap-3 md:justify-between">
          <button
            onClick={scrollLeft}
            ref={leftArrowRef}
            className="hidden cursor-pointer self-center transition-opacity duration-700 md:block"
          >
            <IoArrowBackCircleOutline className="text-default text-6xl" />
          </button>
          <div
            ref={scrollContainerRef}
            className="scrollbar no-scrollbar mt-3 flex w-[90%] snap-x flex-wrap items-center justify-center gap-5 overflow-scroll md:flex-nowrap md:justify-start"
          >
            <div className="snap-start">
              <NannyCard type="book" />
            </div>
            <div className="snap-start">
              <NannyCard type="book" />
            </div>
            <div className="snap-start">
              <NannyCard type="book" />
            </div>
            <div className="snap-start">
              <NannyCard type="book" />
            </div>
            <div className="snap-start">
              <NannyCard type="book" />
            </div>
            <div className="snap-start">
              <NannyCard type="book" />
            </div>
            <div className="snap-start">
              <NannyCard type="book" />
            </div>
            <div className="snap-start">
              <NannyCard type="book" />
            </div>
          </div>
          <button
            onClick={scrollRight}
            ref={rightArrowRef}
            className="hidden cursor-pointer self-center transition-opacity duration-700 md:block"
          >
            <IoArrowForwardCircleOutline className="text-default text-6xl" />
          </button>
        </div>
      </section>
    </main>
  );
}
