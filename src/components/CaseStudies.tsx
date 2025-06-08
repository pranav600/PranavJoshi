import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "AI Image Generator",
    description:
      "Generate amazing visuals from text prompts with powerful AI technology.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    tech: ["React", "Next.js", "Tailwind CSS"],
    link: "https://ai-image-generator-ten-theta.vercel.app/",
  },
  {
    title: "Property Recommendation",
    description:
      "Discover ideal properties based on your preferences and real-time data insights.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    tech: ["Python", "Streamlit", "FlaskAPI"],
    link: "",
  },
  {
    title: "Stock Price Prediction",
    description:
      "A productivity app for managing tasks and projects with team collaboration.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    tech: ["React", "Firebase", "TypeScript"],
    link: "",
  },
];

const CaseStudies = () => {
  return (
    <section
      id="case-studies"
      className="bg-[#000000] py-20 px-4 min-h-[90vh] relative overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Case Studies
          </h2>
          <div className="h-1 w-20 bg-green-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-[#232323] rounded-xl overflow-hidden shadow-lg flex flex-col h-full hover:scale-[1.02] transition-all duration-300">
                <a
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-48 w-full relative block cursor-pointer"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {study.link && (
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold bg-black/50 px-4 py-2 rounded-full">
                          View Project →
                        </span>
                      </div>
                    )}
                  </div>
                </a>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-500 transition-colors duration-300">
                    {study.title}
                  </h3>
                  <p className="text-gray-300 mb-4 flex-1">
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {study.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#000] text-gray-200 text-xs font-mono px-3 py-1 rounded-full border border-gray-700 group-hover:border-green-500/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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
