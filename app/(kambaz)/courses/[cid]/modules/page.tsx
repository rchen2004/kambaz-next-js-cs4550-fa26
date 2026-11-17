"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Module from "./Module";
import ModuleControls from "./ModulesControls";
import { type CourseModule } from "../../../store/modulesStore";
import * as client from "../../client";

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const [modules, setModules] = useState<CourseModule[]>([]);

  async function loadModules() {
    try {
      setModules(await client.findModulesForCourse(cid));
    } catch {
      setModules([]);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- load replaces the empty list
    void loadModules();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cid]);

  async function addModule(name: string) {
    await client.createModuleForCourse(cid, { name, description: "", lessons: [] });
    await loadModules();
  }

  async function updateModule(module: CourseModule) {
    const saved = { ...module, editing: false };
    await client.updateModule(saved);
    await loadModules();
  }

  async function deleteModule(moduleId: string) {
    await client.deleteModule(moduleId);
    await loadModules();
  }

  // editing and typing only change this page until the module is saved
  function changeModule(module: CourseModule) {
    setModules(modules.map((m) => (m._id === module._id ? module : m)));
  }

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <ModuleControls onAdd={addModule} />
      </div>
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module
            key={module._id}
            module={module}
            onChange={changeModule}
            onSave={updateModule}
            onDelete={() => deleteModule(module._id)}
          />
        ))}
      </ul>
    </div>
  );
}
