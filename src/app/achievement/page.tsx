import Image from "next/image";
export default function Achievement() {
  return (
    <div id="achievement">
      <div
        className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center"
        style={{ height: "100vh", gap: "1rem" }}
      >
        <div className="card ">
          <Image
            width={400}
            height={400}
            src="/insta.jpeg"
            alt="Shoes"
            className="rounded-xl"
          />
        </div>
        <div className="card ">
          <figure>
            <Image
              width={400}
              height={400}
              src="/steller.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
        </div>
        <div className="card">
          <figure>
            <Image
              width={200}
              height={400}
              src="/microsoft.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
        </div>
        {/*   <Image
          alt="hero"
          width={400}
          height={400}
          src="/insta.jpeg"
          objectFit="fit"
        />
        <Image
          alt="hero"
          width={400}
          height={400}
          src="/steller.png"
          objectFit="fit"
        />
        <Image alt="hero" width={400} height={400} src="/microsoft.png" /> */}
      </div>
    </div>
  );
}
