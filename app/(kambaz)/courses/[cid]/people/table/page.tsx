"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import { emptyUser, useAccountContext, type User } from "../../../../account/AccountContext";
import * as client from "../../../client";

const input = "rounded border border-neutral-300 px-2 py-1";

export default function PeopleTable() {
  const { cid } = useParams<{ cid: string }>();
  const { currentUser } = useAccountContext();
  const isFaculty = currentUser?.role === "FACULTY";
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>(emptyUser);

  async function loadUsers() {
    try {
      setUsers(await client.findPeopleForCourse(cid));
    } catch {
      setUsers([]);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- load replaces the empty list
    void loadUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cid]);

  async function addUser() {
    // the server also enrolls the new person in this course
    await client.createPersonInCourse(cid, user);
    setUser(emptyUser);
    await loadUsers();
  }

  async function updateUser() {
    await client.updatePerson(user);
    setUser(emptyUser);
    await loadUsers();
  }

  async function deleteUser(u: User) {
    if (!window.confirm(`Delete ${u.firstName} ${u.lastName}?`)) return;
    await client.deletePerson(u._id);
    await loadUsers();
  }

  return (
    <div id="wd-people-table" className="overflow-x-auto">
      {isFaculty && (
        <div id="wd-people-editor" className="mb-4 flex flex-wrap items-center gap-2">
          <input className={input} placeholder="First name" id="wd-user-first-name"
            value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
          <input className={input} placeholder="Last name" id="wd-user-last-name"
            value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
          <input className={input} placeholder="Username" id="wd-user-username"
            value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
          <input className={input} placeholder="Password" type="password" id="wd-user-password"
            value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
          <input className={input} placeholder="Login ID" id="wd-user-login-id"
            value={user.loginId} onChange={(e) => setUser({ ...user, loginId: e.target.value })} />
          <input className={input} placeholder="Section" id="wd-user-section"
            value={user.section} onChange={(e) => setUser({ ...user, section: e.target.value })} />
          <select className={input} id="wd-user-role"
            value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
            <option value="STUDENT">Student</option>
            <option value="TA">TA</option>
            <option value="FACULTY">Faculty</option>
            <option value="ADMIN">Admin</option>
          </select>
          <button type="button" id="wd-add-user-click" onClick={addUser}
            disabled={!user.username || user._id !== ""}
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white disabled:opacity-50">
            Add
          </button>
          <button type="button" id="wd-update-user-click" onClick={updateUser}
            disabled={user._id === ""}
            className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium disabled:opacity-50">
            Update
          </button>
        </div>
      )}
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
            {isFaculty && <th className="p-2"></th>}
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id} className="odd:bg-neutral-50">
              <td className="wd-full-name p-2 text-nowrap">
                <FaUserCircle className="me-2 inline align-middle text-3xl text-neutral-500" />
                <span className="wd-first-name">{u.firstName}</span>{" "}
                <span className="wd-last-name">{u.lastName}</span>
              </td>
              <td className="wd-login-id p-2">{u.loginId}</td>
              <td className="wd-section p-2">{u.section}</td>
              <td className="wd-role p-2">{u.role}</td>
              <td className="wd-last-activity p-2">{u.lastActivity}</td>
              <td className="wd-total-activity p-2">{u.totalActivity}</td>
              {isFaculty && (
                <td className="p-2 text-nowrap">
                  <button type="button" onClick={() => setUser(u)}
                    className="rounded bg-yellow-400 px-2 py-1 text-xs font-medium">
                    Edit
                  </button>
                  <button type="button" onClick={() => deleteUser(u)}
                    className="ms-2 rounded bg-red-600 px-2 py-1 text-xs font-medium text-white">
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
