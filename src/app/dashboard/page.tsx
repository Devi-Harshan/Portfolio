import Image from "next/image";
import "./styles.css";

export default function Dashboard() {
  return (
    <div className="hero">
      <div className="nameWrapper"> Devi Harshan</div>
      <div className="row">
        {/*  <div className="col-md-12 text-center">
      <h3 className="animate-charcter">Front End Developer</h3>
    </div> */}
        <div className="word">
          <span>Front End Developer</span>
        </div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
      </div>
      {/* <Image
              src="/backgroundGIF.gif"
              alt="Gif"
              className="dark:invert"
              objectFit='fill'
              layout='fill'
              priority
            />  */}
    </div>
  );
}
