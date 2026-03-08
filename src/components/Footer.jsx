import React from 'react';
import '../styles/footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiHuggingface } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';

const links = [
  {
    name: 'GitHub',
    url: 'https://github.com/Ashx098',
    icon: <FaGithub />
  },
  {
    name: 'HuggingFace',
    url: 'https://huggingface.co/Ashx098',
    icon: <SiHuggingface />
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/avinash-mynampati',
    icon: <FaLinkedin />
  },
  {
    name: 'ORCID',
    url: 'https://orcid.org/0009-0000-8854-5360',
    icon: <FiExternalLink />
  },
  {
    name: 'Email',
    url: 'mailto:avinash@asthralabs.com',
    icon: <FaEnvelope />
  }
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Asthra Labs</h3>
          <p>AI Systems Research & Experiments</p>
        </div>

        <div className="footer-links">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              title={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} MSR Avinash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
