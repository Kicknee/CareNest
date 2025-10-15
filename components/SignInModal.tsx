import Image from "next/image";
import { useEffect } from "react";

const loginOptions = [
  {
    label: "Google",
    src: "/google-logo.png",
    alt: "Google icon",
  },
  {
    label: "Apple",
    src: "/apple-logo.png",
    alt: "Apple icon",
  },
  {
    label: "email",
    src: "/mail-logo.png",
    alt: "Email icon",
  },
];

function SignInModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-primary/77 fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center backdrop-blur-sm">
      <div className="flex flex-col items-center gap-7 text-center">
        <h1 className="text-[36px]">
          Find the perfect nanny for your <br />
          <span className="font-bold tracking-wider">family</span>
        </h1>
        <p className="text-[24px]">Log in or Sign up</p>
        {loginOptions.map((option) => (
          <div
            key={option.label}
            className="flex w-[300px] cursor-pointer items-center gap-8 rounded-3xl bg-white px-5 py-3 text-[16px] text-black shadow-2xl hover:scale-95 md:w-[350px] md:text-[20px]"
          >
            <Image src={option.src} alt={option.alt} width={35} height={35} />
            Continue with {option.label}
          </div>
        ))}
        <button
          className="text cursor-pointer text-[24px] font-bold tracking-widest hover:scale-95"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default SignInModal;
