"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAccountContext } from "../AccountContext";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();

  const signup = () => {
    if (!username || !password) return;
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
        type="password"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <button
        onClick={signup}
        type="button"
        id="wd-signup-btn"
        className="mb-2 block w-full rounded bg-red-500 px-3 py-2 text-center text-white no-underline"
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
