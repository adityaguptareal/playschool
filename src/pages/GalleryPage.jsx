import React from 'react';
    import { motion } from 'framer-motion';
    import { useInView } from 'react-intersection-observer';
    import { Camera } from 'lucide-react';

    const galleryImages = [
      {
        url: 'https://images.pexels.com/photos/8613062/pexels-photo-8613062.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Art Class'
      },
      {
        url: 'https://images.pexels.com/photos/8613319/pexels-photo-8613319.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Outdoor Play'
      },
      {
        url: 'https://images.pexels.com/photos/8535230/pexels-photo-8535230.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Music Time'
      },
      {
        url: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Story Time'
      },
      {
        url: 'https://images.pexels.com/photos/8363119/pexels-photo-8363119.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Learning Activities'
      },
      {
        url: 'https://images.pexels.com/photos/8035112/pexels-photo-8035112.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'Playtime'
      }
    ];

    const GalleryPage = () => {
      const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });

      return (
        <main className="pt-20">
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">See Our World!</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Take a peek into the daily joy and learning at PlaySchool
                  </p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={image.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative group overflow-hidden rounded-xl shadow-lg"
                  >
                    <div className="">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-semibold">{image.title}</h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
      );
    };

    export default GalleryPage;
