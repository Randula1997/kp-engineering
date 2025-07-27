"use client";

import { motion } from "framer-motion";
import Image1 from "../assets/commitment/1.jpg";
import Image2 from "../assets/commitment/2.jpg";
import Image3 from "../assets/commitment/3.jpg";
import Image4 from "../assets/commitment/4.jpg";
import Image5 from "../assets/commitment/5.jpg";
import Image6 from "../assets/commitment/6.jpg";
import Image7 from "../assets/commitment/7.jpg";
import Image8 from "../assets/commitment/8.jpg";
import Image9 from "../assets/commitment/9.jpg";
import Image10 from "../assets/commitment/10.jpg";

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function CommitmentSection() {
  return (
    <section
      id="about"
      className="py-20 px-6 sm:px-10 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Commitment
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {`At KP Engineering, we are dedicated to fostering long-term partnerships built on
trust, reliability, and exceptional service. Our team of experienced professionals is
committed to delivering solutions that not only meet but exceed your
expectations, contributing to the success and operational excellence of your
establishments.`}
          </p>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-6xl mx-auto"
        >
          {images.map((image, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <img
                src={image.src}
                alt={`Commitment image ${idx + 1}`}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
