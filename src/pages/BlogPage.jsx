import React from 'react';
    import { motion } from 'framer-motion';
    import { useInView } from 'react-intersection-observer';
    import { Calendar, ArrowRight } from 'lucide-react';

    const blogPosts = [
      {
        title: '10 Activities to Boost Your Child\'s Creativity',
        excerpt: 'Discover fun and engaging activities that help develop your child\'s creative thinking and problem-solving skills.',
        image: 'https://images.unsplash.com/photo-1519682337058-484054447914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        date: 'March 15, 2024'
      },
      {
        title: 'The Importance of Early Childhood Education',
        excerpt: 'Learn why the first five years are crucial for your child\'s development and future success.',
        image: 'https://images.unsplash.com/photo-1546411544-122914160814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        date: 'March 10, 2024'
      },
      {
        title: 'Preparing Your Child for Their First Day',
        excerpt: 'Tips and strategies to help make the transition to school smooth and enjoyable for your little one.',
        image: 'https://images.unsplash.com/photo-1519682337058-484054447914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        date: 'March 5, 2024'
      }
    ];

    const BlogPage = () => {
      const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });

      return (
        <main className="pt-20">
          <section className="py-20 bg-emerald-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Parenting Tips & School Updates
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Stay informed with the latest insights on parenting and early childhood education
                  </p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar size={16} className="mr-2" />
                        {post.date}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <a
                        href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                      >
                        Read More <ArrowRight size={16} className="ml-2" />
                      </a>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        </main>
      );
    };

    export default BlogPage;
