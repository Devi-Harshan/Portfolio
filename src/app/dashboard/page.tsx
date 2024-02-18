import About from "../about/page";
import Header from "../header/page";
import "./styles.css";

export default function Dashboard() {
  return (
    <div className="flex flex-col h-full w-full">
      <Header />
      <About/>
    </div>
  );
}
