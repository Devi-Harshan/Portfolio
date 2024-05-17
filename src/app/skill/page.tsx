"use client";
import "./styles.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import ReactIcon from "../../../public/svg/reactIcon";
import Next from "next";
import Angular from "../../../public/svg/angular";
import { NextIcon } from "../../../public/svg/next";
import NodeIcon from "../../../public/svg/nodeIcon";
import BitBucket from "../../../public/svg/bitbucket";
import Jira from "../../../public/svg/jira";
import Confluence from "../../../public/svg/confluence";
import GitIcon from "../../../public/svg/git";

export default function Skill() {
  const [selectedTab, setSelectedTab] = useState(initialTabs[0]);

  return (
    <div id="about">
      <div
        className="container flex px-10 py-10 md:flex-row flex-col items-center"
        style={{ height: "100vh" }}
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
                  <> CSS Libraries</>
                ) : selectedTab.label === "VersionControl" ? (
                  <div className="skills-align">
                    <GitIcon /> <BitBucket /> <Jira />
                    <Confluence />
                  </div>
                ) : selectedTab.label === "IDE" ? (
                  <>IDE</>
                ) : (
                  "😋"
                )}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
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
