import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Clock, Shield } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Expert Teachers',
    description: 'Highly qualified and experienced educators dedicated to your child\'s growth.',
  },
  {
    icon: Users,
    title: 'Small Class Sizes',
    description: 'Personalized attention with a maximum of 12 children per class.',
  },
  {
    icon: Clock,
    title: 'Flexible Hours',
    description: 'Extended day programs to accommodate working parents\' schedules.',
  },
  {
    icon: Shield,
    title: 'Safe Environment',
    description: 'State-of-the-art security systems and strict safety protocols.',
  },
];

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
          alt="Background"
          className="object-cover w-full h-full opacity-10"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Why Choose PlaySchool?
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide a nurturing environment where children can learn, grow, and thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-emerald-600 mb-4">
                <reason.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
