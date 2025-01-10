import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Languages, Music, GraduationCap, Puzzle } from 'lucide-react';

const features = [
  {
    icon: Languages,
    title: 'Languages',
    description: 'Promoting multilingual learning through immersive experiences.',
    color: 'text-blue-500',
  },
  {
    icon: Music,
    title: 'Music',
    description: 'Develop creativity and expression through musical activities.',
    color: 'text-purple-500',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Building strong academic foundations for lifelong learning.',
    color: 'text-emerald-500',
  },
  {
    icon: Puzzle,
    title: 'Interactive Play',
    description: 'Hands-on learning through carefully curated educational toys.',
    color: 'text-orange-500',
  },
];

const FeatureCard = ({ feature, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <div className={`${feature.color} mb-4`}>
        <feature.icon size={32} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Makes Us Special
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive approach to early childhood education ensures your child receives the best possible start in life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
