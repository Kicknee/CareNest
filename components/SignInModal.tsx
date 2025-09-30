import React from "react";
import Image from "next/image";

function SignInModal() {
  return (
    <div className="bg-primary/77 fixed z-50 flex h-screen w-screen items-center justify-center backdrop-blur-sm">
      <div className="flex w-[380px] flex-col items-center gap-15 text-center">
        <h1>
          Find the perfect nanny for your <br />
          <span className="font-bold">family</span>
        </h1>
        <p className="text-sm">Log in or Sign up</p>
        <div className="flex rounded-2xl bg-white px-1 py-2 text-sm text-black shadow-2xl">
          <Image
            src="/google-logo.png"
            alt="Google icon"
            width={24}
            height={24}
          />
          Continue with Google
        </div>
        <div className="flex rounded-2xl bg-white px-1 py-2 text-sm text-black shadow-2xl">
          <Image
            src="/apple-logo.png"
            alt="Apple icon"
            width={24}
            height={24}
          />{" "}
          Continue with Apple
        </div>
        <div className="flex rounded-2xl bg-white px-1 py-2 text-sm text-black shadow-2xl">
          <Image
            src="/mail-logo.png"
            alt="Google icon"
            width={24}
            height={24}
          />
          Continue with email
        </div>
      </div>
    </div>
  );
}

export default SignInModal;
