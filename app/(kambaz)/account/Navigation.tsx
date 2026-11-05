"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../kambaz.css";
import { useAccountContext } from "./AccountContext";

const labels = { signin: "Sign In", signup: "Sign Up", profile: "Profile" };

export default function AccountNavigation() {
  const { currentUser } = useAccountContext();
  const links = currentUser
    ? (["profile"] as const)
    : (["signin", "signup"] as const);
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-account-navigation" className="wd list-group rounded-none text-xl">
      {links.map((link) => {
        const href = `/account/${link}`;
        const active = pathname === href || pathname.startsWith(href + "/");
        return (
          <Link
            key={link}
            href={href}
            id={`wd-${link}-link`}
            className={
              active
                ? "list-group-item active border-0"
                : "list-group-item border-0 text-red-600"
            }
          >
            {labels[link]}
          </Link>
        );
      })}
    </div>
  );
}
