"use client";

import { useAccountContext } from "../account/AccountContext";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import * as client from "../courses/client";
import { emptyCourse, type Course } from "../store/coursesStore";

export default function Dashboard() {
  const { currentUser } = useAccountContext();
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [course, setCourse] = useState<Course>(emptyCourse);

  async function loadCourses() {
    try {
      const data = !currentUser || showAllCourses
        ? await client.fetchAllCourses()
        : await client.findMyCourses();
      setCourses(data);
    } catch {
      setCourses([]);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- load replaces the empty list
    void loadCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, showAllCourses]);

  async function addCourse() {
    await client.createCourse(course);
    await loadCourses();
  }

  async function updateCourse() {
    await client.updateCourse(course);
    await loadCourses();
  }

  async function deleteCourse(courseId: string) {
    await client.deleteCourse(courseId);
    await loadCourses();
  }

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="flex items-center justify-between">
        Dashboard
        {currentUser && (
          <button
            type="button"
            id="wd-enrollments-toggle"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            {showAllCourses ? "My Courses" : "Enrollments"}
          </button>
        )}
      </h1>
      <hr />
      <h5 className="flex flex-wrap items-center gap-2">
        New Course
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-add-new-course-click"
          onClick={addCourse}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          id="wd-update-course-click"
          onClick={updateCourse}
        >
          Update
        </button>
      </h5>
      <input
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        type="date"
        value={course.startDate}
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        id="wd-course-start-date"
      />
      <input
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        id="wd-course-name"
      />
      <textarea
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        rows={3}
        value={course.description}
        onChange={(e) =>
          setCourse({ ...course, description: e.target.value })
        }
        id="wd-course-description"
      />
      <input
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-course-number"
      />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {courses.map((c) => (
          <CourseCard
            key={c._id}
            course={c}
            onEdit={() => setCourse(c)}
            onDelete={() => deleteCourse(c._id)}
            showEnrollment={showAllCourses}
          />
        ))}
      </div>
    </div>
  );
}