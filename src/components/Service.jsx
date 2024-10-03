// import React from "react";

// const services = [
//   {
//     id: 1,
//     title: "Web Design",
//     description: "Creating visually appealing and user-friendly web designs.",
//   },
//   {
//     id: 2,
//     title: "Frontend Development",
//     description: "Building responsive and interactive user interfaces.",
//   },
//   {
//     id: 3,
//     title: "Backend Development",
//     description: "Developing robust server-side logic and databases.",
//   },
//   {
//     id: 4,
//     title: "Full-Stack Development",
//     description: "Combining both frontend and backend development skills.",
//   },
//   {
//     id: 5,
//     title: "Content Writing",
//     description: "Writing content for your business and companies.",
//   },
//   {
//     id: 6,
//     title: "Digital Marketing",
//     description: "Promote your business with our digital marketing team.",
//   },
// ];
// const Service = () => {
//   return (
//     <div className="bg-black text-white dark:bg-gray-600 py-20" id="service">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service) => (
//             <div
//               key={service.id}
//               className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform
//               transition-transform duration-300 hover:scale-105"
//             >
//               <div
//                 className="text-right text-2xl font-bold text-transparent bg-clip-text
//               bg-gradient-to-r from-green-600 to-blue-400"
//               >
//                 {service.id}
//               </div>
//               <h3
//                 className="mt-2 text-2xl font-bold text-transparent bg-clip-text
//               bg-gradient-to-r from-green-400 to-blue-500"
//               >
//                 {service.title}
//               </h3>
//               <p className="mt-2 text-gray-300">{service.description}</p>
//               <a
//                 href="#"
//                 className="mt-4 inline-block text-green-400 hover:text-blue-500"
//               >
//                 Read More
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Service;


import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
  },
  {
    id: 5,
    title: "Content Writing",
    description: "Writing content for your business and companies.",
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Promote your business with our digital marketing team.",
  },
];

// Framer Motion Variants for animations
const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const hoverEffect = {
  scale: 1.05,
  transition: { type: "spring", stiffness: 300 },
};

const Service = () => {
  return (
    <motion.div
      className="bg-black text-white dark:bg-gray-600 py-20"
      id="service"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg shadow-lg"
              variants={itemVariants}
              whileHover={hoverEffect}
            >
              <motion.div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">
                {service.id}
              </motion.div>
              <motion.h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </motion.h3>
              <motion.p className="mt-2 text-gray-300">
                {service.description}
              </motion.p>
              <motion.a
                href="#"
                className="mt-4 inline-block text-green-400 hover:text-blue-500"
              >
                Read More
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Service;
