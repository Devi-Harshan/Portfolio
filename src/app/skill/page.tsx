"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Angular from "../../../public/svg/angular";
import BitBucket from "../../../public/svg/bitbucket";
import BootStrapUI from "../../../public/svg/bootstrapUI";
import ChakraUI from "../../../public/svg/chakraUI";
import Confluence from "../../../public/svg/confluence";
import GitIcon from "../../../public/svg/git";
import Jira from "../../../public/svg/jira";
import MaterailUI from "../../../public/svg/materialUI";
import { NextIcon } from "../../../public/svg/next";
import NodeIcon from "../../../public/svg/nodeIcon";
import ReactIcon from "../../../public/svg/reactIcon";
import TailwindCSS from "../../../public/svg/tailwindCSS";
import "./styles.css";

export default function Skill() {
  const [selectedTab, setSelectedTab] = useState(initialTabs[0]);

  return (
    <div
      className="container flex px-10 py-10 md:flex-row flex-col items-center"
      style={{
        height: "100vh",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div className="window">
        <nav>
          <ul>
            {initialTabs.map((item) => (
              <li
                key={item.label}
                className={item === selectedTab ? "selected" : ""}
                onClick={() => setSelectedTab(item)}
              >
                {`${item.label}`}
                {item === selectedTab ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <main className="main-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab.label === "Frameworks_Libraries" ? (
                <div className="skills-align">
                  <ReactIcon /> <Angular />
                  <NextIcon />
                  <NodeIcon />
                </div>
              ) : selectedTab.label === "CSSLibraries" ? (
                <div className="skills-align">
                  <MaterailUI /> <ChakraUI /> <TailwindCSS />
                  <BootStrapUI />
                </div>
              ) : selectedTab.label === "VersionControl" ? (
                <div className="skills-align">
                  <GitIcon /> <BitBucket /> <Jira />
                  <Confluence />
                </div>
              ) : selectedTab.label === "IDE" ? (
                <>IDE</>
              ) : (
                ""
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export interface Ingredient {
  icon: string;
  label: string;
}

export const allIngredients = [
  { icon: "🍅", label: "Frameworks_Libraries" },
  { icon: "🧀", label: "CSSLibraries" },
  { icon: "🥕", label: "VersionControl" },
  { icon: "🍌", label: "Soft Skills" },
  { icon: "🫐", label: "IDE" },
  { icon: "🥂", label: "Champers?" },
];

const [Frameworks, CSSLibraries, VersionControl, IDE] = allIngredients;
export const initialTabs = [Frameworks, CSSLibraries, VersionControl, IDE];

export function getNextIngredient(
  ingredients: Ingredient[]
): Ingredient | undefined {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
}
