"use client";

import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCircleUser, FaInbox, FaCircleQuestion } from "react-icons/fa6";
import { FaBook, FaCalendar } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { IoCalendarOutline } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/labs/lab2/tailwind/utilities.css";

const LINKS = [
  { label: "Dashboard", path: "/dashboard", icon: AiOutlineDashboard },
  { label: "Courses", path: "/dashboard", icon: FaBook },
  { label: "Calendar", path: "/calendar", icon: FaCalendar },
  { label: "Inbox", path: "/inbox", icon: FaInbox },
  { label: "Labs", path: "/labs", icon: ImLab },
  { label: "History", path: "/history", icon: IoCalendarOutline },
  { label: "Help", path: "/labs", icon: FaCircleQuestion, id: "wd-ai-nav-help" },
];

export default function KambazNavigation() {
  const pathname = usePathname();
  const accountActive = pathname.includes("/account");

  return (
    <nav
      id="wd-kambaz-navigation"
      className="fixed bottom-0 top-0 z-20 hidden w-[120px] bg-black md:block"
    >
      <Link
        href="https://www.northeastern.edu/"
        id="wd-northeastern-link"
        target="_blank"
        rel="noreferrer"
      >
      <img
      id="wd-northeastern-logo"
      src="/images/neu.png"
      width="120px"
      alt="Northeastern University logo"
      />
      </Link>
      <Link
        href="/account"
        id="wd-account-link"
        className={`block py-3 text-center text-sm no-underline ${
          accountActive ? "bg-white text-red-600" : "bg-black text-white"
        }`}
      >
        <FaRegCircleUser
          className={`inline-block text-3xl ${
            accountActive ? "text-red-600" : "text-white"
          }`}
        />
        <br />
        Account
      </Link>
      {LINKS.map((link) => {
        const active =
          link.label === "Courses"
            ? pathname.includes("/courses")
            : pathname.includes(link.path);
        const Icon = link.icon;
        return (
          <Link
            key={link.label}
            href={link.path}
            id={link.id ?? `wd-${link.label.toLowerCase()}-link`}
            className={`block py-3 text-center text-sm no-underline ${
              active ? "bg-white text-red-600" : "bg-black text-white"
            }`}
          >
            <Icon className="inline-block text-3xl text-red-600" />
            <br />
            {link.label}
          </Link>
        );
      })}
      <br />
    </nav>
  );
}