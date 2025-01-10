import React from 'react';
    import { motion } from 'framer-motion';
    import { useInView } from 'react-intersection-observer';
    import { ArrowRight } from 'lucide-react';

    const programs = [
      {
        title: 'Early Learners',
        age: '2-3 Years',
        description: 'Foundation program focusing on social skills and basic concepts.',
        image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Preschool',
        age: '3-4 Years',
        description: 'Structured learning with emphasis on cognitive development.',
        image: 'https://images.unsplash.com/photo-1544507888-56d73eb6046e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Pre-K Program',
        age: '4-5 Years',
        description: 'Advanced preparation for successful kindergarten transition.',
        image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      }
    ];

    const ProgramsPage = () => {
      const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });

      return (
        <main className="pt-20">
          <section className="py-20 bg-emerald-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <motion.h2
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="text-4xl font-bold text-gray-900 mb-4"
                >
                  Our Programs
                </motion.h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Age-appropriate programs designed to nurture your child's unique potential.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {programs.map((program, index) => (
                  <motion.div
                    key={program.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
                        <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                          {program.age}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{program.description}</p>
                      <a
                        href={`/programs/${program.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                      >
                        Learn More <ArrowRight size={16} className="ml-2" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
      );
    };

    export default ProgramsPage;
