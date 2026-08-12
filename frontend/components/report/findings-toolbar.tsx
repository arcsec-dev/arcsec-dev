import { Search } from "lucide-react";

type Props = {
  search: string;
  setSearch: (value: string) => void;
};

export function FindingsToolbar({
  search,
  setSearch,
}: Props) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <h2 className="text-2xl font-semibold">Security Findings</h2>

      <label className="relative block w-full md:w-80">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <span className="sr-only">Search findings</span>
        <input
          type="text"
          placeholder="Search findings..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="w-full rounded-lg border border-border bg-background py-2 pl-10 pr-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
        />
      </label>
    </div>
  );
}
