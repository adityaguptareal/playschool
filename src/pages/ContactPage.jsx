import React from 'react';
    import { motion } from 'framer-motion';
    import { useInView } from 'react-intersection-observer';
    import { Phone, Mail, MapPin } from 'lucide-react';

    const ContactPage = () => {
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
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We'd love to hear from you! Get in touch with us for any inquiries or to schedule a visit.
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
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
                    <p className="text-gray-700 mb-6">
                      Feel free to reach out to us using the contact information below. We are available to answer your questions and assist you with the enrollment process.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-center text-gray-700">
                        <Phone size={16} className="mr-3 text-emerald-600" />
                        <a href="tel:+1234567890" className="hover:text-emerald-600 transition-colors">
                          (123) 456-7890
                        </a>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <Mail size={16} className="mr-3 text-emerald-600" />
                        <a href="mailto:info@playschool.com" className="hover:text-emerald-600 transition-colors">
                          info@playschool.com
                        </a>
                      </li>
                      <li className="flex items-start text-gray-700">
                        <MapPin size={16} className="mr-3 mt-1 text-emerald-600 flex-shrink-0" />
                        <span>123 Education Street, Learning City, ST 12345</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1567057419565-4349c49d8a04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Contact Us"
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

    export default ContactPage;
