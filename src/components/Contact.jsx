import React from "react";
import "../styles/contact.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const contactItems = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "avinashmynampati@gmail.com",
    link: "mailto:avinashmynampati@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "linkedin.com/in/avinash-mynampati",
    link: "https://www.linkedin.com/in/avinash-mynampati-744583234/",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/Ashx098",
    link: "https://github.com/Ashx098",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Bangalore, India",
    link: null,
  },
];

const Contact = () => {
  return ( 
    <section className="contact-section" id="contact">
      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Get in Touch
      </motion.h2>

      <motion.p
        className="contact-subtext"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Whether you have a question, want to collaborate, or just say hi — feel free to
        reach out!
      </motion.p>

      <div className="contact-grid">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            className="contact-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="contact-icon">{item.icon}</div>
            <h4>{item.label}</h4>
            {item.link ? (
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.value}
              </a>
            ) : (
              <p>{item.value}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
