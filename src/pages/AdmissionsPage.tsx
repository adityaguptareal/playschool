import React from 'react';
    import { motion } from 'framer-motion';
    import { useInView } from 'react-intersection-observer';

    const AdmissionsPage = () => {
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
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Admissions</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Learn about our admission process, requirements, and how to enroll your child.
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
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Admission Process</h3>
                    <p className="text-gray-700 mb-6">
                      Our admission process is designed to be simple and transparent. Here are the steps to enroll your child:
                    </p>
                    <ol className="list-decimal list-inside text-gray-700 mb-6">
                      <li><strong>Inquiry:</strong> Contact us to express your interest and ask any questions.</li>
                      <li><strong>Visit:</strong> Schedule a visit to our school to see our facilities and meet our staff.</li>
                      <li><strong>Application:</strong> Fill out the application form and submit the required documents.</li>
                      <li><strong>Interview:</strong> Attend an interview with our admissions team.</li>
                      <li><strong>Enrollment:</strong> Upon acceptance, complete the enrollment process and pay the fees.</li>
                    </ol>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Required Documents</h3>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                      <li>Child's birth certificate</li>
                      <li>Child's immunization records</li>
                      <li>Parent's identification documents</li>
                      <li>Completed application form</li>
                    </ul>
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1576087094892-31c5d544d9d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Admissions"
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

    export default AdmissionsPage;
