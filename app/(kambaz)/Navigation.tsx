"use client";

import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCircleUser, FaInbox, FaCircleQuestion } from "react-icons/fa6";
import { FaBook, FaCalendar } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import Link from "next/link";
import "@/app/labs/lab2/tailwind/utilities.css";

export default function KambazNavigation() {
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
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <FaRegCircleUser className="inline-block text-3xl text-red-600" />
        <br />
        Account
      </Link>
      <Link
        href="/dashboard"
        id="wd-dashboard-link"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <AiOutlineDashboard className="inline-block text-3xl text-red-600" />
        <br />
        Dashboard
      </Link>

      <Link
        href="/dashboard"
        id="wd-courses-link"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <FaBook className="inline-block text-3xl text-red-600" />
        <br />
        Courses
      </Link>
      <Link
        href="/calendar"
        id="wd-calendar-link"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <FaCalendar className="inline-block text-3xl text-red-600" />
        <br />
        Calendar
      </Link>
      <Link
        href="/inbox"
        id="wd-inbox-link"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <FaInbox className="inline-block text-3xl text-red-600" />
        <br />
        Inbox
      </Link>
      <Link
        href="/labs"
        id="wd-labs-link"
        className="block bg-white py-3 text-center text-sm text-red-600 no-underline"
      >
        <ImLab className="inline-block text-3xl text-red-600" />
        <br />
        Labs
      </Link>
      <Link
        href="/labs"
        id="wd-ai-nav-help"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <FaCircleQuestion className="inline-block text-3xl text-red-600" />
        <br />
        Help
      </Link>
      <br />
    </nav>
  );
}