import ModuleControlButtons from "./ModuleControlButtons";
import Lesson from "./Lesson";
import { type CourseModule } from "../../../store/modulesStore";

export default function Module({
  module,
  onChange,
  onSave,
  onDelete,
}: {
  module: CourseModule;
  onChange: (module: CourseModule) => void;
  onSave: (module: CourseModule) => void;
  onDelete: () => void;
}) {
  return (
    <li className="wd-module mb-5 overflow-hidden border border-neutral-400 p-0 text-xl">
      <div className="wd-title flex items-center justify-between bg-neutral-200 p-3 ps-2">
        {module.editing ? (
          <input
            className="w-1/2 rounded border border-neutral-300 px-2 py-1 text-base"
            defaultValue={module.name}
            onChange={(e) => onChange({ ...module, name: e.target.value })}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSave(module);
              }
            }}
          />
        ) : (
          <span>{module.name}</span>
        )}
        <ModuleControlButtons
          onEdit={() => onChange({ ...module, editing: true })}
          onDelete={onDelete}
        />
      </div>
      <ul className="wd-lessons m-0 list-none p-0">
        {module.lessons?.map((lesson) => (
          <Lesson key={lesson._id} title={lesson.name} />
        ))}
      </ul>
    </li>
  );
}
