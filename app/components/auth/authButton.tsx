"use client";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

export const AuthButton = () => {
  const { isSignedIn } = useUser();

  return (
    <>
      {isSignedIn ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <SignInButton afterSignInUrl="/boards" />
      )}
    </>
  );
};
