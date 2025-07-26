'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Cog, 
  Snowflake, 
  Wrench, 
  Settings, 
  Package, 
  ChefHat, 
  Sparkles 
} from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Package,
      title: 'Strategic Spare Parts Supply',
      description: 'Comprehensive inventory management and supply of critical spare parts to minimize downtime.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Snowflake,
      title: 'Cool Room & Freezer Solutions',
      description: 'Complete refrigeration systems design, installation, and maintenance for hospitality needs.',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Cog,
      title: 'Customized Engineering & Manufacturing',
      description: 'Tailored engineering solutions and custom manufacturing to meet specific requirements.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Wrench,
      title: 'Expert Repair & Maintenance',
      description: '24/7 repair services and preventive maintenance programs for all equipment.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Settings,
      title: 'Auxiliary Equipment Supply',
      description: 'Complete range of auxiliary equipment and components for hospitality operations.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: ChefHat,
      title: 'Commercial Kitchen Solutions',
      description: 'Full-service kitchen equipment supply, installation, and maintenance solutions.',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Sparkles,
      title: 'Advanced Cleaning Machines',
      description: 'State-of-the-art cleaning equipment and systems for hospitality environments.',
      color: 'from-teal-500 to-teal-600',
    },
  ];

  return (
    <section id="services" className="py-20 p-10 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Core Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive engineering solutions tailored for the hospitality industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-center text-gray-900 dark:text-white">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}