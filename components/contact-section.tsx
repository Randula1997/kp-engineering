// 'use client';

// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import { toast } from 'sonner';
// import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

// const contactSchema = z.object({
//   name: z.string().min(2, 'Name must be at least 2 characters'),
//   email: z.string().email('Please enter a valid email address'),
//   company: z.string().min(2, 'Company name must be at least 2 characters'),
//   phone: z.string().min(10, 'Phone number must be at least 10 characters'),
//   message: z.string().min(10, 'Message must be at least 10 characters'),
// });

// type ContactFormData = z.infer<typeof contactSchema>;

// export function ContactSection() {
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<ContactFormData>({
//     resolver: zodResolver(contactSchema),
//   });

//   const onSubmit = async (data: ContactFormData) => {
//     setIsSubmitting(true);

//     // Simulate form submission
//     await new Promise(resolve => setTimeout(resolve, 1000));

//     toast.success('Thank you for your inquiry! We will get back to you soon.');
//     reset();
//     setIsSubmitting(false);
//   };

//   const contactInfo = [
//     {
//       icon: MapPin,
//       title: 'Location',
//       content: 'Asia Pacific Region',
//       subContent: 'Serving 7 countries',
//     },
//     {
//       icon: Phone,
//       title: 'Phone',
//       content: '+1-234-567-8900',
//       subContent: '24/7 Support Available',
//     },
//     {
//       icon: Mail,
//       title: 'Email',
//       content: 'info@kpengineering.com',
//       subContent: 'Quick Response Guaranteed',
//     },
//     {
//       icon: Clock,
//       title: 'Business Hours',
//       content: 'Monday - Friday: 8AM - 6PM',
//       subContent: 'Emergency Support: 24/7',
//     },
//   ];

//   return (
//     <section id="contact" className="py-20 p-10 bg-white dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
//             Get In Touch
//           </h2>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//             Ready to discuss your hospitality engineering needs? We're here to help.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <div>
//               <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
//                 Contact Information
//               </h3>
//               <div className="space-y-6">
//                 {contactInfo.map((info, index) => (
//                   <div key={index} className="flex items-start space-x-4">
//                     <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
//                       <info.icon className="w-6 h-6 text-white" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900 dark:text-white">
//                         {info.title}
//                       </h4>
//                       <p className="text-gray-600 dark:text-gray-300">
//                         {info.content}
//                       </p>
//                       <p className="text-sm text-gray-500 dark:text-gray-400">
//                         {info.subContent}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <Card className="shadow-2xl border-0">
//               <CardHeader>
//                 <CardTitle className="text-2xl text-gray-900 dark:text-white">
//                   Send us a Message
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <Label htmlFor="name">Name *</Label>
//                       <Input
//                         id="name"
//                         {...register('name')}
//                         className="mt-1"
//                         placeholder="Your full name"
//                       />
//                       {errors.name && (
//                         <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
//                       )}
//                     </div>
//                     <div>
//                       <Label htmlFor="email">Email *</Label>
//                       <Input
//                         id="email"
//                         type="email"
//                         {...register('email')}
//                         className="mt-1"
//                         placeholder="your.email@example.com"
//                       />
//                       {errors.email && (
//                         <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
//                       )}
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <Label htmlFor="company">Company *</Label>
//                       <Input
//                         id="company"
//                         {...register('company')}
//                         className="mt-1"
//                         placeholder="Your company name"
//                       />
//                       {errors.company && (
//                         <p className="text-sm text-red-600 mt-1">{errors.company.message}</p>
//                       )}
//                     </div>
//                     <div>
//                       <Label htmlFor="phone">Phone *</Label>
//                       <Input
//                         id="phone"
//                         {...register('phone')}
//                         className="mt-1"
//                         placeholder="+1-234-567-8900"
//                       />
//                       {errors.phone && (
//                         <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
//                       )}
//                     </div>
//                   </div>

//                   <div>
//                     <Label htmlFor="message">Message *</Label>
//                     <Textarea
//                       id="message"
//                       {...register('message')}
//                       className="mt-1 min-h-[120px]"
//                       placeholder="Tell us about your project requirements..."
//                     />
//                     {errors.message && (
//                       <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>
//                     )}
//                   </div>

//                   <Button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
//                   >
//                     {isSubmitting ? (
//                       <div className="flex items-center space-x-2">
//                         <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                         <span>Sending...</span>
//                       </div>
//                     ) : (
//                       <div className="flex items-center space-x-2">
//                         <Send className="w-4 h-4" />
//                         <span>Send Message</span>
//                       </div>
//                     )}
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { FaSquareWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export function ContactSection() {
  const whatsappNumber = "94766166886"; // Without + sign
  const emailAddress = "kitproducts.eng@gmail.com";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  const openEmail = () => {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="w-full py-12 bg-white dark:bg-neutral-900 text-center"
    >
      <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
        Contact Us
      </h2>
      <div className="flex justify-center gap-6">
        <button
          onClick={openWhatsApp}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
        >
          <FaSquareWhatsapp size={20} />
          WhatsApp
        </button>

        <button
          onClick={openEmail}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          <SiGmail size={20} />
          Email
        </button>
      </div>
    </section>
  );
}
