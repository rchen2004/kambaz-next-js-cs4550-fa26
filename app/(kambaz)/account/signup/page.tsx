import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h1 className="mb-3 text-2xl font-semibold">Sign Up</h1>
      <input
        id="wd-username"
        placeholder="username"
        defaultValue="ada"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        defaultValue="123"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        id="wd-password-verify"
        placeholder="verify password"
        type="password"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <Link
        id="wd-signup-btn"
        href="/account/profile"
        className="mb-2 block w-full rounded bg-red-500 px-3 py-2 text-center text-white no-underline"
      >
        Sign Up
      </Link>
      <Link 
        id="wd-signin-redirect-btn"
        href="/account/signin">
        Sign in
      </Link>
    </div>
  );
}
