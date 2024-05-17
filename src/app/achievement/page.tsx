import Image from "next/image";
export default function Achievement() {
  return (
    <div
      id="achievement"
      className="container mx-auto px-10 py-10 items-center"
    >
      <div
        className="flex grid-flow-col grid-cols-3 gap-8 items-center"
        style={{ height: "100vh" }}
      >
        <div>
          <img src="/insta.jpeg" alt="" loading="lazy" className="imgHeight" />
        </div>
        <div>
          <img src="/steller.png" alt="" loading="lazy" className="imgHeight" />
        </div>
        <div>
          <img
            src="/microsoft.png"
            alt=""
            loading="lazy"
            className="imgHeight"
          />
        </div>
      </div>
    </div>
  );
}
