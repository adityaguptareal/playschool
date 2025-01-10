import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { ArrowRight } from 'lucide-react';

    const Hero = () => {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [phone, setPhone] = useState('');
      const [message, setMessage] = useState('');
      const [submissionStatus, setSubmissionStatus] = useState(null);

      const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmissionStatus('loading');

        // Simulate a form submission delay
        setTimeout(() => {
          setSubmissionStatus('success');
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
        }, 1500);
      };

      return (
        <div className="relative min-h-screen flex items-center">
          {/* Background Image */}
          <div
            className="absolute brightness-50 inset-0 z-0"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/8467296/pexels-photo-8467296.jpeg?auto=compress&cs=tinysrgb&w=600")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-600/80" /> */}
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="max-w-2xl md:pr-8">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                  Best Kindergarten for Your Children
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl text-white/90 mb-8"
                >
                  Where learning meets play, and every child's potential blooms. Join our nurturing community where education is an adventure.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-wrap gap-4 mb-8"
                >
                  <a
                    href="#get-started"
                    className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors duration-200 flex items-center"
                  >
                    Get Started
                    <ArrowRight className="ml-2" size={20} />
                  </a>
                  <a
                    href="/enroll"
                    className="bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors duration-200"
                  >
                    Enroll Now
                  </a>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-6 w-full "
              >
                <h3 className="text-xl font-semibold text-white mb-4">Request a Call Back</h3>
                {submissionStatus === 'success' ? (
                  <p className="text-emerald-400 mb-4">Thank you! We will contact you soon.</p>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 rounded-md text-gray-800 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 rounded-md text-gray-800 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="tel"
                        placeholder="Your Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2 rounded-md text-gray-800 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <textarea
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-2 rounded-md text-gray-800 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        rows="3"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors duration-200"
                      disabled={submissionStatus === 'loading'}
                    >
                      {submissionStatus === 'loading' ? 'Submitting...' : 'Submit'}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 right-0  h-32 bg-gradient-to-t from-white to-transparent z-10" />
        </div>
      );
    };

    export default Hero;
