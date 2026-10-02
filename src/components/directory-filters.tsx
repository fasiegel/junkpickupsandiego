import { DIRECTORY_MODES, type DirectoryMode } from "@/lib/directory/order";

export function DirectoryFilters({
  mode,
  onChange,
}: {
  mode: DirectoryMode;
  onChange: (mode: DirectoryMode) => void;
}) {
  const active = DIRECTORY_MODES.find((item) => item.id === mode);
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {DIRECTORY_MODES.map((item) => {
          const selected = mode === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onChange(selected ? "default" : item.id)}
              className={
                selected
                  ? "min-h-11 rounded-full bg-ink px-4 text-sm font-medium text-cream"
                  : "min-h-11 rounded-full border border-line bg-paper px-4 text-sm font-medium text-ink-soft hover:border-ink hover:text-ink"
              }
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {active ? <p className="mt-3 text-sm text-taupe">{active.hint}</p> : null}
    </div>
  );
}
