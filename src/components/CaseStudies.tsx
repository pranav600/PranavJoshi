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
        <div className="flex md:block overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none hide-scrollbar space-x-5 md:space-x-0 md:space-y-32 pb-8 md:pb-0 px-6 md:px-0 -mx-6 md:mx-0">
          {caseStudies.map((project, index) => (
            <motion.div
              key={project.title}
              className={`group relative flex-shrink-0 w-[80vw] sm:w-[70vw] md:w-auto snap-start flex flex-col ${
                index % 2 === 0 ? "md:flex-row rotate-[-1deg] md:rotate-0" : "md:flex-row-reverse rotate-[1deg] md:rotate-0"
              } items-center gap-0 md:gap-12 transition-transform duration-500`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}>
              {/* Mobile View Card (Hidden on Desktop) */}
              <div className="md:hidden w-full flex flex-col bg-white/95 dark:bg-zinc-900/90 backdrop-blur-md border border-gray-200/80 dark:border-zinc-800/80 rounded-3xl overflow-hidden shadow-xl transition-all duration-300">
                {/* Image container */}
                <div className="relative w-full h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw"
                    priority={index < 2}
                  />
                </div>

                {/* Content section */}
                <div className="p-6 flex flex-col flex-grow text-left">
                  {/* Category (green box) and Year (gray box) */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400 text-xs font-semibold rounded-full border border-green-500/20 dark:border-green-500/30">
                      {project.category}
                    </span>
                    <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-300 text-xs font-bold rounded-md border border-gray-200 dark:border-zinc-700/50">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mt-auto mb-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-gray-100 dark:bg-zinc-800/80 text-gray-700 dark:text-zinc-300 text-xs font-mono rounded-md border border-gray-200 dark:border-zinc-700/50">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View project button - Only this is clickable */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live Demo: ${project.title}`}
                    className="pt-4 border-t border-gray-100 dark:border-zinc-800/60 flex items-center justify-between text-green-600 dark:text-green-400 font-semibold text-sm active:opacity-75 transition-opacity group/btn">
                    <span>Live Demo</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover/btn:translate-x-1">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Image container (Desktop Only) */}
              <motion.div
                className={`hidden md:block relative md:w-1/2 h-[450px] md:h-96 rounded-[2rem] md:rounded-2xl overflow-hidden ${
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
                  aria-label={`Live Demo: ${project.title}`}
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
                </a>
              </motion.div>

              {/* Desktop Content (Hidden on Mobile) */}
              <div className="hidden md:block w-full md:w-1/2 space-y-6 text-left">
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
                    aria-label={`Live Demo: ${project.title}`}
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
