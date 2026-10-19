import Link from "next/link";
import { notFound } from "next/navigation";
import * as db from "../../../../database";
export default async function AssignmentEditor({
    params,
} : {
    params: Promise<{cid: string; aid: string}>;
}) {
  const {cid, aid} = await params;
  const assignment = db.assignments.find((a) => a._id === aid && a.course === cid);
  if (!assignment) notFound();
  return (
    <div id="wd-assignments-editor" className="flex max-w-3xl flex-col gap-5">
      <div className="flex flex-col">
        <label htmlFor="wd-name" className="mb-1">Assignment Name</label>
        <input id="wd-name" defaultValue={assignment.title} className="w-full rounded border border-gray-300 px-3 py-2" />
      </div>
      <textarea
        id="wd-description"
        rows={10}
        defaultValue={assignment.description}
        className="w-full rounded border border-gray-300 px-3 py-2 font-sans"
      />
      <div className="flex items-center gap-4">
        <label htmlFor="wd-points" className="w-40 shrink-0 text-right">Points</label>
        <input id="wd-points" type="number" defaultValue={assignment.points} className="w-full rounded border border-gray-300 px-3 py-2" />
      </div>
      <div className="flex items-center gap-4">
        <label htmlFor="wd-group" className="w-40 shrink-0 text-right">Assignment Group</label>
        <select id="wd-group" className="w-full rounded border border-gray-300 px-3 py-2">
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>
      <div className="flex items-center gap-4">
        <label htmlFor="wd-display-grade-as" className="w-40 shrink-0 text-right">Display Grade as</label>
        <select id="wd-display-grade-as" defaultValue="PERCENTAGE" className="w-full rounded border border-gray-300 px-3 py-2">
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
          <option value="LETTER">Letter Grade</option>
        </select>
      </div>
      <div className="flex gap-4">
        <label htmlFor="wd-submission-type" className="w-40 shrink-0 pt-2 text-right">Submission Type</label>
        <div className="flex-1 space-y-4 rounded border border-gray-300 p-4">
          <select id="wd-submission-type" className="w-full rounded border border-gray-300 px-3 py-2">
            <option value="ONLINE">Online</option>
            <option value="OFFLINE">Offline</option>
          </select>
          <div className="font-bold">Online Entry Options</div>
          <div className="grid gap-4">
            <label htmlFor="wd-text-entry" className="flex items-center gap-2">
              <input type="checkbox" id="wd-text-entry" name="wd-online-options" />
              Text Entry
            </label>
            <label htmlFor="wd-website-url" className="flex items-center gap-2">
              <input type="checkbox" id="wd-website-url" name="wd-online-options" defaultChecked />
              Website URL
            </label>
            <label htmlFor="wd-media-recordings" className="flex items-center gap-2">
              <input type="checkbox" id="wd-media-recordings" name="wd-online-options" />
              Media Recordings
            </label>
            <label htmlFor="wd-student-annotation" className="flex items-center gap-2">
              <input type="checkbox" id="wd-student-annotation" name="wd-online-options" />
              Student Annotation
            </label>
            <label htmlFor="wd-file-upload" className="flex items-center gap-2">
              <input type="checkbox" id="wd-file-upload" name="wd-online-options" />
              File Uploads
            </label>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <span className="w-40 shrink-0 pt-2 text-right">Assign</span>
        <div className="flex-1 space-y-4 rounded border border-gray-300 p-4">
          <div>
            <label htmlFor="wd-assign-to" className="mb-1 block font-bold">Assign to</label>
            <select id="wd-assign-to" className="w-full rounded border border-gray-300 px-3 py-2">
              <option value="ALL">Everyone</option>
              <option value="SELECTED">Selected Students</option>
            </select>
          </div>
          <div>
            <label htmlFor="wd-due-date" className="mb-1 block font-bold">Due</label>
            <input type="datetime-local" id="wd-due-date" defaultValue={`${assignment.due}T23:59`} className="w-full rounded border border-gray-300 px-3 py-2" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label htmlFor="wd-available-from" className="mb-1 block font-bold">Available from</label>
              <input type="datetime-local" id="wd-available-from" defaultValue={`${assignment.available}T00:00`} className="w-full rounded border border-gray-300 px-3 py-2" />
            </div>
            <div>
              <label htmlFor="wd-available-until" className="mb-1 block font-bold">Until</label>
              <input type="datetime-local" id="wd-available-until" className="w-full rounded border border-gray-300 px-3 py-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="wd-ai-editor-notes" className="mb-1 font-medium">Sample notes</label>
        <textarea
          id="wd-ai-editor-notes"
          defaultValue={`This is a sample generated by AI.`}
          className="w-full rounded border px-3 py-2 font-sans"
        />
      </div>
      <hr className="border-gray-300" />
      <div className="flex justify-end gap-2">
        <Link href={`/courses/${cid}/assignments`} id="wd-cancel" className="rounded border border-gray-300 bg-gray-100 px-4 py-2">Cancel</Link>
        <Link href={`/courses/${cid}/assignments`} id="wd-save" className="rounded bg-red-700 px-4 py-2 text-white">Save</Link>
      </div>
    </div>
  );
}
