import React from "react";

function SignInModal() {
  return (
    <div className="bg-primary/77 fixed z-50 flex h-screen w-screen items-center justify-center backdrop-blur-sm">
      <div className="flex w-[380px] flex-col items-center gap-15 text-center">
        <h1>
          Find the perfect nanny for your <br />
          <span className="font-bold">family</span>
        </h1>
        <p className="text-sm">Log in or Sign up</p>
        <div>
          <div className="w-[ bg-white text-sm text-black">
            Continue with Google
          </div>
          <div className="w-[ bg-white text-sm text-black">
            Continue with Apple
          </div>
          <div className="w-[ bg-white text-sm text-black">
            Continue with email
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInModal;
