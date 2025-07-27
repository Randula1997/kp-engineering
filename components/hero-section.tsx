"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
const InteractiveGlobe = dynamic(() => import('@/components/interactive-globe'), {
  ssr: false, // This disables server-side rendering for this component
});

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />

      {/* Background Globe */}
      <div className="absolute right-0 top-10 h-full w-full max-w-[900px] opacity-60 pointer-events-none z-0">
        <InteractiveGlobe />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:pr-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-semibold text-blue-600 dark:text-blue-400 tracking-wide"
            >
              KP Engineering
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Your Trusted Partner for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Hospitality Solutions
              </span>{" "}
              Across Asia
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
            >
              Since 2012, KP Engineering has been delivering comprehensive
              engineering solutions for the tourism and hospitality sector.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() =>
                    document
                      .querySelector("#services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-8 py-3 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
                >
                  Our Services
                </Button>
              </div>

              <div className="max-w-4xl mx-auto bg-gray-900 dark:bg-gray-800 rounded-2xl px-6 py-8 flex flex-col sm:flex-row justify-around items-center shadow-xl text-white">
                {[
                  { value: "7+", label: "Countries" },
                  { value: "15+", label: "Global Brands" },
                  { value: "24/7", label: "Support" },
                ].map((stat, i) => (
                  <div key={i} className="text-center px-6 py-4">
                    <div className="text-3xl sm:text-4xl font-bold text-blue-400 drop-shadow-md">
                      {stat.value}
                    </div>
                    <div className="text-sm sm:text-base text-gray-300 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
