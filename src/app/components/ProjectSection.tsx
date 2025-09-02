import React from "react";

type Project = {
  title: string;
  description: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Online Quiz & Question Management System",
    description:
      "A full-stack web application for customizable quizzes with user authentication and role-based access control. The backend is built with Node.js and Express, using MongoDB for data persistence and RESTful APIs. Authentication is secured with JWT, and the frontend is designed with Next.js for responsive dashboards.",
    link: "#",
  },
  {
    title: "Gesture-Based Human-Computer Interaction System",
    description:
      "As a team leader, I developed a computer vision system using Python, OpenCV, and MediaPipe to enable gesture-based input for mouse navigation, clicks, and drag-and-drop. The system was optimized for low-latency performance and features a responsive GUI for intuitive user interaction.",
    link: "https://github.com/sriharsha778/Gesture-Based-Human-Computer-Interaction",
  },
  {
    title: "Sign Language Recognition System",
    description:
      "An in-development system to recognize sign language gestures in real-time. It features a FastAPI backend server that processes images and returns the recognized sign using a computer vision and machine learning model, with a design optimized for scalable deployment.",
    link: "https://github.com/sriharsha778/Sign-Language-Recognition-Using-OpenCV",
  },
  {
    title: "Task Manager App",
    description:
      "A cross-platform mobile application built with React Native and Expo for managing daily and weekly tasks with local data persistence and a swipe-to-delete gesture.",
    link: "https://github.com/sriharsha778/Task-Scheduler",
  },
  {
    title: "Real-time Chat App",
    description:
      "A MERN-based (MongoDB, Express, React, Node.js) chat and forum application featuring real-time messaging with Socket.IO, JWT authentication, and a clean UI.",
    link: "https://github.com/sriharsha778/Real-time-chat-app",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-base-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-8">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" rounded-lg bg-base-200 shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-secondary ">
                {project.title}
              </h3>
              <p className="text-base-400 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 link link-accent "
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
