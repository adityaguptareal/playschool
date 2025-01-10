import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What is the age group for admission?',
    answer: 'We accept children from 2 to 5 years old across our different programs. Each program is specifically designed to meet the developmental needs of different age groups.'
  },
  {
    question: 'What are the school timings?',
    answer: 'Our regular school hours are from 8:30 AM to 3:30 PM, Monday through Friday. We also offer extended care options from 7:30 AM to 6:00 PM for working parents.'
  },
  {
    question: 'Do you provide transportation services?',
    answer: 'Yes, we provide safe and reliable transportation services with GPS-tracked buses and trained attendants for various routes across the city.'
  },
  {
    question: 'What is your teaching methodology?',
    answer: 'We follow a play-based learning approach that combines Montessori principles with modern educational practices, focusing on holistic development through hands-on activities.'
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200 last:border-0">
    <button
      className="w-full py-4 flex justify-between items-center text-left"
      onClick={onClick}
    >
      <span className="font-semibold text-gray-900">{question}</span>
      {isOpen ? (
        <ChevronUp className="text-emerald-600 flex-shrink-0" size={20} />
      ) : (
        <ChevronDown className="text-emerald-600 flex-shrink-0" size={20} />
      )}
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-48' : 'max-h-0'
      }`}
    >
      <p className="pb-4 text-gray-600">{answer}</p>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our programs and facilities
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg"
        >
          <div className="p-6">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex}
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
