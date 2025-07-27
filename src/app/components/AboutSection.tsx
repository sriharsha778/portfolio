"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaCode,
  FaFigma,
  FaLinux,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostman,
  SiMongodb,
  SiCplusplus,
  SiC,
  SiGo,
  SiReact,
} from "react-icons/si";

export default function AboutSection() {
  const skills = [
    {
      group: "Languages",
      items: [
        { name: "Python", icon: <FaPython className="text-yellow-400" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-500" />,
        },
        { name: "C++", icon: <SiCplusplus className="text-blue-700" /> },
        { name: "C", icon: <SiC className="text-gray-600" /> },
        { name: "Java", icon: <FaJava className="text-red-600" /> },
        { name: "Go", icon: <SiGo className="text-sky-600" /> }, // 🆕 Added Go
      ],
    },
    {
      group: "Frameworks & Libraries",
      items: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-black dark:text-white" />,
        },
        {
          name: "React Native",
          icon: <SiReact className="text-cyan-500" />, // 🆕 Reusing React icon for RN
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-sky-400" />,
        },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      ],
    },
    {
      group: "Tools",
      items: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "VSCode", icon: <FaCode className="text-blue-500" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
        { name: "Linux", icon: <FaLinux className="text-gray-400" /> },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="py-20 px-6 bg-base-100 text-base-content text-center min-h-screen"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Tech Stack</h2>

        {skills.map(({ group, items }) => (
          <div key={group} className="mb-12">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              {group}
            </h3>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {items.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="card bg-base-200 shadow-md p-4 transition-transform hover:scale-105"
                  variants={itemVariants}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-4xl">{skill.icon}</div>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
