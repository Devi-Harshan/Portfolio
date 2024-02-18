import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-10 h-full">
        <Dashboard />
      </div>
    </main>
  );
}
