"use client";
import { useEffect, useState } from "react";
import * as client from "./client";

export default function WorkingWithRemoteObjectsAsync() {
    const [assignment, setAssignment] = useState({ title: "" });
    const updateTitle = async () => {
        setAssignment(await client.updateTitle(assignment.title));
    };
    useEffect(() => { client.fetchAssignment().then(setAssignment); }, []);
    const button = "inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white hover:bg-blue-700";
    return (
        <div id="wd-working-with-remote-objects-async">
            <h3>Working With Objects Async</h3>
            <h4> Assignment </h4>
            <pre id="wd-assignment">{JSON.stringify(assignment, null, 2)}</pre>
            <div className="my-2 flex flex-wrap items-center gap-2">
                <input id="wd-assignment-title" className="rounded border border-gray-300 px-2 py-1"
                    value={assignment.title}
                    onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
                <button id="wd-update-assignment-title" className={button} onClick={updateTitle}>
                    Update Title
                </button>
            </div>
            <hr className="my-4" />
        </div>
    );
}
