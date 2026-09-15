import AssignmentItem from "./AssignmentItem";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      <input type="search" placeholder="Search for assignments"/>
      <button>+ Group</button>
      <button>+ Assignment</button>
      <h3>ASSIGNMENTS 40% of Total <button>+</button></h3> 
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <AssignmentItem cid={cid} aid="1" title="A1 ENV + HTML" details="Multiple Modules | Not available until May 6 at 12:00am |
Due May 13 at 11:59pm | 100 pts" />
        </li>
        <li className="wd-assignment-list-item">
          <AssignmentItem cid={cid} aid="2" title="A2 CSS + TAILWIND" details="Multiple Modules | Not available until May 13 at 12:00am |
Due May 20 at 11:59pm | 100 pts" />
        </li>
        <li className="wd-assignment-list-item">
          <AssignmentItem cid={cid} aid="3" title="A3 JS + REACT" details="Multiple Modules | Not available until May 20 at 12:00am |
Due May 27 at 11:59pm | 100 pts" />
        </li>
      </ul>
    </div>
  );
}