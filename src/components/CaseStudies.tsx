"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// Portfolio case studies data — each entry represents a featured case study with
// title, description, thumbnail, tech stack, and an external project link
const caseStudies = [
  {
    title: "Luxoro - Online E-commerce Web Application",
    description:
      "A premium e-commerce platform built with modern web technologies to deliver a seamless shopping experience.",
    image: "/luxoro-banner.png",
    category: "Web Development",
    year: "2025",
    tech: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      "MongoDB",
    ],
    link: process.env.NEXT_PUBLIC_LUXORO_LINK,
  },
  {
    title: "Calendar Buddy",
    description:
      "Built a calendar based note management app enabling users to create, view, and organize day wise notes efficiently",
    image: "/calendar-buddy.png",
    category: "Full Stack App",
    year: "2025",
    tech: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Google Auth",
    ],
    link: process.env.NEXT_PUBLIC_CALENDAR_BUDDY_LINK,
  },
  {
    title: "PropFind",
    description:
      "Built an AI-powered property recommendation engine enabling users to discover real estate properties and predict future valuations using Machine Learning",
    image: "/propfind.png", // Update with your actual image path
    category: "Full Stack ML App",
    year: "2025", // Update if needed
    tech: [
      "Next.js",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "Scikit-Learn",
      "Pandas",
    ],
    link: process.env.NEXT_PUBLIC_PROPFIND_LINK, // Update with your actual env variable
  },
  {
    title: "Blobify3D",
    description:
      "Built an interactive, visually engaging web application featuring dynamic grid layouts, fluid animations, and modern UI components.",
    image: "/blobify3d.png",
    category: "Frontend App",
    year: "2026",
    tech: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
    ],
    link: process.env.NEXT_PUBLIC_BLOBIFY3D_LINK,
  },

  // Add more case studies as needed
];

// Main Case Studies Component
const CaseStudies = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Track scroll progress of the section to drive parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax y-offset values — faster for y1, slower for y2
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      id="case-studies"
      className="relative font-mono flex flex-col-reverse md:flex-row items-center justify-center w-full min-h-screen px-4 md:px-8 overflow-hidden gap-8 md:gap-16"
      ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Case Studies</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
        </motion.div>

        {/* Case studies grid */}
        <div className="flex md:block overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none hide-scrollbar space-x-6 md:space-x-0 md:space-y-32 pb-8 md:pb-0 px-4 md:px-0 -mx-4 md:mx-0">
          {caseStudies.map((project, index) => (
            <motion.div
              key={project.title}
              className={`group relative flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-auto snap-center flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-0 md:gap-12`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}>
              {/* Image container */}
              <motion.div
                className={`relative w-full md:w-1/2 h-[450px] md:h-96 rounded-[2rem] md:rounded-2xl overflow-hidden ${
                  index % 2 === 0 ? "md:rotate-0" : "md:-rotate-0"
                } shadow-2xl`}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index < 2}
                  />
                  {/* Desktop Hover Overlay */}
                  <div className="hidden md:flex absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
                    <span className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center gap-2">
                      View Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  </div>

                  {/* Mobile Glass Overlay (Hidden on Desktop) */}
                  <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex flex-col justify-end p-6 sm:p-8">
                    <div className="flex items-center gap-3 text-sm text-gray-300 mb-3">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full border border-green-500/30 backdrop-blur-md">
                        {project.category}
                      </span>
                      <span className="font-bold text-white">{project.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-2 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/10 text-white text-xs font-mono rounded-md backdrop-blur-md border border-white/10">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-white/10 text-white text-xs font-mono rounded-md backdrop-blur-md border border-white/10">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </a>
              </motion.div>

              {/* Desktop Content (Hidden on Mobile) */}
              <div className="hidden md:block w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="px-3 py-1 bg-gray-800 text-white rounded-full">
                    {project.category}
                  </span>
                  <span className="font-bold text-xl">{project.year}</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300">
                    {project.title}
                  </a>
                </h3>

                <p className="text-gray-500 text-lg leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1 bg-gray-100/50 dark:bg-gray-800 dark:text-gray-200 text-sm md:text-base font-mono rounded-full border border-gray-800 transition-colors duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
