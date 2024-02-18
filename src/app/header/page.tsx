"use client";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../../utils/motion";
import "./styles.css";

export default function Header() {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row flex-wrap w-full"
      >
        <div className="flex flex-row bg-gray-800 md:sticky top-0 w-full">
          <motion.div
            variants={slideInFromLeft(0.3)}
            className="flex w-full box py-[8px] px-[4px] opacity-[0.9] border border-[#7042f88b]"
          >
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <div className="title-font font-medium text-white mb-4 md:mb-0">
                <a href="#about" className="ml-3 text-xl">
                  Devi Harshan
                </a>
              </div>
              <div className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                <a href="#projects" className="mr-5 hover:text-white">
                  Projects
                </a>
                <a href="#skills" className="mr-5 hover:text-white">
                  Skills
                </a>
                <a href="#achievements" className="mr-5 hover:text-white">
                  Achievements
                </a>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
