import React from 'react';
    import { motion } from 'framer-motion';
    import { useInView } from 'react-intersection-observer';

    const AboutPage = () => {
      const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });

      return (
        <main className="pt-20">
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Learn more about our mission, values, and the team behind PlaySchool.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                    <p className="text-gray-700 mb-6">
                      At PlaySchool, our mission is to provide a nurturing and stimulating environment where children can develop a lifelong love for learning. We are committed to fostering each child's unique potential through play-based education and personalized care.
                    </p>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h3>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                      <li><strong>Care:</strong> We prioritize the well-being and happiness of every child.</li>
                      <li><strong>Learning:</strong> We believe in the power of play to inspire curiosity and growth.</li>
                      <li><strong>Community:</strong> We foster a supportive and inclusive environment for all.</li>
                      <li><strong>Excellence:</strong> We strive for the highest standards in early childhood education.</li>
                    </ul>
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="About Us"
                      className="w-full h-auto rounded-xl object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      );
    };

    export default AboutPage;
