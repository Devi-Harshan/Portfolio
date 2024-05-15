import Dashboard from "./dashboard/page";
import Header from "./header/page";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-10 h-full">
        <div className="links-container">
          <Header />
        </div>

        <Dashboard />
      </div>
    </main>
  );
}
