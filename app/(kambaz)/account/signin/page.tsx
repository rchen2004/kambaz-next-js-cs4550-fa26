"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as db from "../../database";
import { useAccountContext } from "../AccountContext";
export default function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();
  const signin = () => {
    const user = db.users.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password,
    );
    if (!user) return;
    setCurrentUser(user);
    router.push("/dashboard");
  };
  return (
    <div id="wd-signin-screen">
      <h1 className="mb-3 text-2xl font-semibold">Sign In</h1>
      <input
        id="wd-username"
        placeholder="username"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <button
        id="wd-signin-btn"
        onClick={signin}
        className="mb-2 block w-full rounded bg-red-500 px-3 py-2 text-center text-white no-underline"
      >
        Sign in
      </button>
      <Link 
        id="wd-signup-redirect-btn"  
        href="/account/signup">
        Sign up
      </Link>
    </div>
  );
}