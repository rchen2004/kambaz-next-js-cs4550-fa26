import Link from "next/link";
export default async function AssignmentEditor({
    params,
} : {
    params: Promise<{cid: string; aid: string}>;
}) {
  const {cid} = await params;
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" defaultValue="The assignment is available online Submit a link to the landing page of">
      </textarea>
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="POINTS">POINTS</option>
                <option value="PERCENTAGE">PERCENTAGE</option>
                <option value="LETTER">LETTER</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="ONLINE">ONLINE</option>
                <option value="OFFLINE">OFFLINE</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top"></td>
            <td>
              <h5>Online Entry Options</h5>
              <input type="checkbox" id="wd-text-entry" name="wd-online-options" />
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br />
              <input type="checkbox" id="wd-website-url" name="wd-online-options" />
              <label htmlFor="wd-website-url">Website URL</label>
              <br />
              <input type="checkbox" id="wd-media-recordings" name="wd-online-options" />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
              <br />
              <input type="checkbox" id="wd-student-annotation" name="wd-online-options" />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
              <br />
              <input type="checkbox" id="wd-file-upload" name="wd-online-options" />
              <label htmlFor="wd-file-upload">File Upload</label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
              <select id="wd-assign-to">
                <option value="ALL">Everyone</option>
                <option value="SELECTED">Selected Students</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input type="datetime-local" id="wd-due-date" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input type="datetime-local" id="wd-available-from" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Until</label>
            </td>
            <td>
              <input type="datetime-local" id="wd-available-until" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top"></td>
            <td>
              <label htmlFor="wd-cancel"></label>
              <Link href={`/courses/${cid}/assignments`} id="wd-cancel">Cancel</Link>{" "}
              <label htmlFor="wd-save"></label>
              <Link href={`/courses/${cid}/assignments`} id="wd-save">Save</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}