"use client";

import { useParams } from "next/navigation";
import Module from "./Module";
import ModuleControls from "./ModulesControls";
import { useModulesStore } from "../../../store/modulesStore";

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const modules = useModulesStore((state) => state.modules).filter(
    (module) => module.course === cid,
  );
  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <ModuleControls />
      </div>
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module key={module._id} module={module} />
        ))}
      </ul>
    </div>
  );
}
