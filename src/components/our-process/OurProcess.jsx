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
    <div className="our-process-banner">
      <motion.section
        className="our-process-section"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.3}} // Trigger when 30% of section is in view
        variants={containerVariants}
      >
        <div className="our-process-header">
          <h2 className="h2-heading">Our Process, Your Peace of Mind</h2>
          <p>
            Once the contract is signed, we’ll schedule a meeting to learn more
            about your business and what you do. With this information, we’ll
            craft the content and design for your site. After receiving your
            final approval, we’ll begin building. The entire process typically
            takes 1 - 2 months, depending on the timing of your feedback and
            approvals. This allows us to deliver a smooth, thorough, and
            well-executed development experience.
          </p>
        </div>
        <motion.div className="our-process-cards-container">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`our-process-card ${index === 0 ? "highlight" : ""}`}
              variants={cardVariants} // Apply individual card animation
            >
              <div className="process-info-container">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              <div className="process-number-container">
                <p className="process-number">{step.number}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  )
}

export default OurProcess
