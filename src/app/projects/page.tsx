import Image from "next/image";
import "./styles.css";
export default function Project() {
  return (
    <div id="projects">
      <div
        className="container mx-auto px-10 py-10 items-center"
        style={{ height: "100vh" }}
      >
        <br />
        <br />

        <div className="row1-container">
          <div className="boxs boxs-down cyan">
            <strong className="headerStyle">Wealth CRM</strong>
            <div>
              Led the development of a cloud-agnostic architecture application
              using React, Typescript, Chakra UI, and GraphQL API, which
              achieved a 20% increase in user session duration and a 15%
              improvement in click-through rates, indicating a substantial rise
              in user engagement
            </div>
            <Image
              width={30}
              height={30}
              className="img-height"
              src="https://assets.codepen.io/2301174/icon-supervisor.svg"
              alt=""
            />
          </div>

          <div className="boxs red">
            <strong className="headerStyle">Capital Market CRM</strong>
            <p>
              Utilized React.js to build responsive and dynamic UI components
              tailored to the needs of our users in the capital market sector.
              Implemented GraphQL for data operations, which allowed for precise
              and optimized data retrieval, improving the performance and
              scalability of the CRM system.
            </p>
            <Image
              width={30}
              height={30}
              className="img-height"
              src="https://assets.codepen.io/2301174/icon-team-builder.svg"
              alt=""
            />
          </div>

          <div className="boxs boxs-down blue">
            <strong className="headerStyle">Institutional Clients Group</strong>
            <p>
              I specialized in creating robust client interfaces for securities
              groups using Angular, ensuring seamless API integration and
              efficient communication with web services. My role was pivotal in
              enhancing user experience and streamlining data exchange in the
              organization’s digital platforms.
            </p>
            <Image
              width={30}
              height={30}
              className="img-height"
              src="https://assets.codepen.io/2301174/icon-calculator.svg"
              alt=""
            />
          </div>
        </div>
        <div className="row2-container">
          <div className="boxs orange">
            <strong className="headerStyle">Interact</strong>
            <p>
              Engineered a quality web application for the lightening
              corporation company to visualize the real time utilization of the
              power of each of the clients with help of Angular 14, HTML,
              Bootstrap and client built CSS style components
            </p>
            <Image
              width={30}
              height={30}
              className="img-height"
              src="https://assets.codepen.io/2301174/icon-karma.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
