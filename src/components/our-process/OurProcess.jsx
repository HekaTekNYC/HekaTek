import React from "react"
import "./our-process.scss"
import {motion} from "framer-motion"

// const containerVariants = {
//   hidden: {opacity: 0},
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2, // Increase the delay between each card to make it smoother
//       ease: "linear", // Smooth the overall transition
//     },
//   },
// }

// const cardVariants = {
//   hidden: {opacity: 0, y: 30}, // Start cards further down for a more noticeable rise effect
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.3, // Slightly longer duration for smoother movement
//       ease: [0.22, 1, 0.36, 1], // Custom bezier curve for a fluid, natural scroll-up effect
//     },
//   },
// }
const containerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each card
    },
  },
}

const cardVariants = {
  hidden: {opacity: 0, y: 30}, // Start cards further down for a more noticeable rise effect
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3, // Slightly longer duration for smoother movement
      ease: [0.22, 1, 0.36, 1], // Custom bezier curve for a fluid, natural scroll-up effect
    },
  },
}
// const cardVariants = {
//   hidden: {opacity: 0, y: 60}, // Cards start slightly below and invisible
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {duration: 0.6, ease: "easeOut"},
//   },
// }

const OurProcess = () => {
  const steps = [
    {
      title: "Consultation",
      description:
        "Begin with a conversation with one of our team who will provide feedback on your current website and understand your objectives for the new one.",
      number: "01",
    },
    {
      title: "Design",
      description:
        "Our website designers will then craft an example website specifically for your small business, tailored to meet your objectives.",
      number: "02",
    },
    {
      title: "Development",
      description:
        "We will create your website using fully custom code, ensuring optimal performance and giving your visitors the perfect view of your business.",
      number: "03",
    },
    {
      title: "Maintenance",
      description:
        "Leave everything to us. We will manage all changes, updates, and maintenance, ensuring your website remains up-to-date and fully functional.",
      number: "04",
    },
  ]

  return (
    <motion.section
      className="our-process-section"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.3}} // Trigger when 30% of section is in view
      variants={containerVariants}
    >
      <h2 className="our-process-title">Our Process</h2>
      <motion.div className="our-process-cards-container">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`our-process-card ${index === 0 ? "highlight" : ""}`}
            variants={cardVariants} // Apply individual card animation
          >
            <h3 className="our-process-card-title">{step.title}</h3>
            <p className="our-process-card-description">{step.description}</p>
            <span className="our-process-card-number">{step.number}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default OurProcess
