import Link from "next/link";

export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h1 className="mb-3 text-2xl font-semibold">Sign In</h1>
      <input
        id="wd-username"
        placeholder="username"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <label htmlFor="wd-ai-signin-note" className="mb-1 block font-medium">
        Sample note
      </label>
      <input
        id="wd-ai-signin-note"
        placeholder="sample note"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <Link
        id="wd-signin-btn"
        href="/account/profile"
        className="mb-2 block w-full rounded bg-red-500 px-3 py-2 text-center text-white no-underline"
      >
        Sign in
      </Link>
      <Link 
        id="wd-signup-redirect-btn"  
        href="/account/signup">
        Sign up
      </Link>
    </div>
  );
}