"use client";
import { useEffect, useState } from "react";

export default function HelloRoute() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("/api/lab5/hello")
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <div id="wd-hello-route">
      <h3>GET /api/lab5/hello (Next.js Route Handler)</h3>
      <p>{message}</p>
      <hr className="my-4" />
    </div>
  );
}
