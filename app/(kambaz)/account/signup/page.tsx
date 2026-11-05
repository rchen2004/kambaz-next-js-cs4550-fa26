"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAccountContext } from "../AccountContext";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();
  const mismatchedPasswords = password !== verifyPassword && verifyPassword.length > 0;
  const ready = username !== "" && password !== "" && password === verifyPassword;

  const signup = () => {
    if (!ready) return;
    setCurrentUser({
      _id: crypto.randomUUID(),
      username,
      password,
      firstName: "",
      lastName: "",
      email: "",
      role: "STUDENT",
      loginId: "",
      section: "",
      lastActivity: "",
      totalActivity: "",
    });
    router.push("/account/profile");
  };

  return (
    <div id="wd-signup-screen">
      <h1 className="mb-3 text-2xl font-semibold">Sign Up</h1>
      <input
        id="wd-username"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        id="wd-password-verify"
        placeholder="verify password"
        value={verifyPassword}
        onChange={(e) => setVerifyPassword(e.target.value)}
        type="password"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      {mismatchedPasswords && (
        <div className="mb-2 text-red-500">Passwords do not match</div>
      )}
      <button
        onClick={signup}
        type="button"
        id="wd-signup-btn"
        className="mb-2 block w-full rounded bg-red-500 px-3 py-2 text-center text-white no-underline disabled:cursor-not-allowed disabled:opacity-50"
      >
        Sign Up
      </button>
      <Link 
        id="wd-signin-link"
        href="/account/signin">
        Sign in
      </Link>
    </div>
  );
}
