'use client';

import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Droplets, Zap, Wind, Package } from 'lucide-react';

export function ProductsSection() {
  const productCategories = [
    {
      id: 'plumbing',
      icon: Droplets,
      title: 'Plumbing Solutions',
      description: 'Complete range of plumbing materials and systems',
      color: 'from-blue-500 to-blue-600',
      products: [
        'HDPE Pipes and Fittings',
        'PVC Plumbing Systems',
        'CPVC Hot Water Solutions',
        'PPR Pipe Systems',
        'Copper Piping',
        'Stainless Steel Fittings',
        'Valve Systems',
        'Drainage Solutions',
      ],
    },
    {
      id: 'electrical',
      icon: Zap,
      title: 'Electrical Solutions',
      description: 'Professional electrical components and systems',
      color: 'from-yellow-500 to-yellow-600',
      products: [
        'Industrial Switches',
        'Power Distribution Units',
        'LED Lighting Systems',
        'Motor Controls',
        'Cable Management',
        'Emergency Lighting',
        'Electrical Panels',
        'Automation Systems',
      ],
    },
    {
      id: 'hvac',
      icon: Wind,
      title: 'Air Conditioning & Refrigeration',
      description: 'Climate control and refrigeration systems',
      color: 'from-cyan-500 to-cyan-600',
      products: [
        'Central Air Conditioning',
        'Split AC Systems',
        'Chiller Units',
        'Refrigeration Compressors',
        'Heat Exchangers',
        'Ventilation Systems',
        'Ductwork Components',
        'Climate Control Systems',
      ],
    },
    {
      id: 'general',
      icon: Package,
      title: 'General Products & Custom Manufacturing',
      description: 'Specialized products and custom solutions',
      color: 'from-purple-500 to-purple-600',
      products: [
        'Custom Metal Fabrication',
        'Specialized Equipment',
        'Replacement Parts',
        'Hotel Room Amenities',
        'Kitchen Equipment',
        'Cleaning Equipment',
        'Safety Systems',
        'Maintenance Tools',
      ],
    },
  ];

  return (
    <section id="products" className="py-20 p-10 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Product Categories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive product range covering all aspects of hospitality engineering
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {productCategories.map((category, index) => (
              <AccordionItem
                key={category.id}
                value={category.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-8 py-6 hover:no-underline group">
                  <div className="flex items-center space-x-4 text-left">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                    {category.products.map((product, productIndex) => (
                      <Badge
                        key={productIndex}
                        variant="secondary"
                        className="justify-start p-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                      >
                        {product}
                      </Badge>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}