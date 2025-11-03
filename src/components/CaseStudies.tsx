import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Luxoro - Online Store",
    description:
      "Discover premium fashion with Luxoro — your destination for stylish, elegant, and modern clothing at affordable prices.",
    image: "/luxoro-banner.png",
    tech: [
      "React",
      "NextJS",
      "Tailwind CSS",
      "TypeScript",
      "NodeJS",
      "MongoDB",
    ],
    link: "https://luxoro-store.vercel.app/",
  },
  {
    title: "AI Image Generator",
    description:
      "Transform your ideas into stunning visuals instantly with the power of advanced AI-driven image generation.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1600&q=90",
    tech: ["React", "Next.js", "Tailwind CSS", "Hugging API"],
    link: "https://ai-image-generator-ten-theta.vercel.app/",
  },
  // {
  //   title: "Property Recommendation",
  //   description:
  //     "Discover ideal properties based on your preferences and real-time data insights.",
  //   image:
  //     "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
  //   tech: ["Python", "Streamlit", "FlaskAPI"],
  //   link: "",
  // }
];

const CaseStudies = () => {
  return (
    <section
      id="case-studies"
      className="pt-16 md:pt-20 pb-12 px-4 min-h-[90vh] relative overflow-hidden"
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
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-4">
            Case Studies
          </h2>
          <div className="h-1 w-20 bg-green-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
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
                  className="h-80 w-full relative block cursor-pointer"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {false}
                  </div>
                </a>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-mono font-bold text-white mb-2 group-hover:text-green-500 transition-colors duration-300">
                    {study.title}
                  </h3>
                  <p className="text-gray-300 font-mono mb-4 flex-1">
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
