"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const caseStudies = [
  {
    title: "Luxoro - Online E-commerce platform",
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
    link: "https://luxoro-store.vercel.app/",
  },
  {
    title: "AI Image Generator",
    description:
      "An advanced image generation tool that transforms text prompts into stunning visuals using AI technology.",
    image: "/image-generator.png",
    category: "AI Application",
    year: "2024",
    tech: ["React", "Next.js", "Tailwind CSS", "Hugging Face API"],
    link: "https://visionbypranav.vercel.app/",
  },
  // Add more case studies as needed
];

const CaseStudies = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      id="case-studies"
      className="relative py-24 overflow-hidden  text-white"
      ref={containerRef}
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-green-500 font-mono text-sm tracking-widest mb-4 inline-block">
            MY WORK
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Case Studies</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
        </motion.div>

        {/* Case studies grid */}
        <div className="space-y-32">
          {caseStudies.map((project, index) => (
            <motion.div
              key={project.title}
              className={`group relative flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-12`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {/* Image container */}
              <motion.div
                className={`relative w-full md:w-1/2 h-96 rounded-2xl overflow-hidden ${
                  index % 2 === 0 ? "md:rotate-0" : "md:-rotate-0"
                } shadow-2xl`}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  </div>
                </a>
              </motion.div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="px-3 py-1 bg-gray-800 rounded-full">
                    {project.category}
                  </span>
                  <span>{project.year}</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-500 transition-colors duration-300"
                  >
                    {project.title}
                  </a>
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-900/50 text-gray-300 text-xs font-mono rounded-full border border-gray-800 hover:border-green-500/50 transition-colors duration-300"
                    >
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
