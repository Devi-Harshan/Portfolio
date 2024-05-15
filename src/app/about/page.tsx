"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div id="about">
        <div
          className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center"
          style={{ height: "100vh" }}
        >
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              {"Hi, I'm Devi Harshan."}
            </h1>
            <div className="mb-8 leading-relaxed">
              A result driven UI developer with four years of experience,
              specializing in creating user interfaces that are not only
              visually pleasing but also highly functional.
            </div>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              >
                See My Past Work
              </a>
            </div>{" "}
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              width={400}
              height={400}
              style={{ borderRadius: "50%" }}
              src="/skills.png"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
