import React from 'react';
import '../styles/research.css';
import { FaFilePdf, FaExternalLinkAlt, FaIdCard, FaBolt, FaUsers } from 'react-icons/fa';

const publications = [
  {
    title: 'Asthra MailGuard: A Privacy-First Hybrid AI Email Assistant Using ML and Local LLMs',
    venue: 'Published in IJRASET',
    url: 'https://www.ijraset.com/best-journal/asthra-mailguard-a-privacy-first-hybrid-ai-email-assistant-using-ml-and-local-llms',
    type: 'journal'
  }
];

const preprints = [
  {
    title: 'Fast-VAT: Accelerating Cluster Tendency Visualization using Cython and Numba',
    authors: 'MSR Avinash (Presidency University, Bangalore), Ismael Lachheb (EPITA School of Engineering and Computer Science, Paris, France)',
    contribution: '50× acceleration of VAT clustering algorithm',
    implementation: 'Implemented using Numba JIT + Cython',
    subjects: ['Machine Learning (cs.LG)', 'Neural & Evolutionary Computing (cs.NE)'],
    url: 'https://arxiv.org/abs/2507.15904',
    arxivId: 'arXiv:2507.15904'
  },
  {
    title: 'Profiling LoRA/QLoRA Fine-Tuning Efficiency on Consumer GPUs: An RTX 4060 Case Study',
    authors: 'MSR Avinash',
    contribution: 'Systematic profiling of LLM fine-tuning on 8GB VRAM',
    implementation: 'PagedAdamW achieves 25% throughput improvement',
    subjects: ['Machine Learning (cs.LG)', 'Artificial Intelligence (cs.AI)', 'Performance (cs.PF)'],
    url: 'https://arxiv.org/abs/2509.12229',
    arxivId: 'arXiv:2509.12229'
  }
];

const Research = () => {
  return (
    <section className="research-section" id="research">
      <h2 className="research-title">Research & Publications</h2>

      <div className="research-content">
        {/* Published Work */}
        <div className="research-category">
          <h3 className="research-category-title">Published Work</h3>
          {publications.map((pub, index) => (
            <div className="research-card" key={index}>
              <div className="research-card-header">
                <FaFilePdf className="research-icon" />
                <span className="research-type">Journal Article</span>
              </div>
              <h4 className="research-card-title">{pub.title}</h4>
              <p className="research-venue">{pub.venue}</p>
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="research-link"
              >
                <FaExternalLinkAlt /> View Publication
              </a>
            </div>
          ))}
        </div>

        {/* arXiv Preprints */}
        <div className="research-category">
          <h3 className="research-category-title">arXiv Preprints</h3>
          <div className="preprints-list">
            {preprints.map((preprint, index) => (
              <div className="preprint-card-structured" key={index}>
                <div className="preprint-header-row">
                  <span className="preprint-arxiv">{preprint.arxivId}</span>
                  <a
                    href={preprint.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="preprint-link"
                  >
                    <FaExternalLinkAlt /> View on arXiv
                  </a>
                </div>

                <h4 className="preprint-title">{preprint.title}</h4>

                <div className="preprint-authors-row">
                  <FaUsers className="authors-icon" />
                  <span>{preprint.authors}</span>
                </div>

                <div className="preprint-key-points">
                  <div className="key-point">
                    <FaBolt className="key-icon" />
                    <div>
                      <strong>Key Contribution:</strong>
                      <p>{preprint.contribution}</p>
                    </div>
                  </div>
                  <div className="key-point">
                    <FaBolt className="key-icon" />
                    <div>
                      <strong>Implementation:</strong>
                      <p>{preprint.implementation}</p>
                    </div>
                  </div>
                </div>

                <div className="preprint-subjects-row">
                  <span className="subjects-label">Subjects:</span>
                  <div className="subjects-tags">
                    {preprint.subjects.map((subject, i) => (
                      <span className="subject-tag" key={i}>{subject}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ORCID */}
        <div className="research-category">
          <h3 className="research-category-title">Research Profile</h3>
          <a
            href="https://orcid.org/0009-0000-8854-5360"
            target="_blank"
            rel="noopener noreferrer"
            className="orcid-card"
          >
            <FaIdCard className="orcid-icon" />
            <div className="orcid-info">
              <span className="orcid-label">ORCID iD</span>
              <span className="orcid-id">0009-0000-8854-5360</span>
            </div>
            <FaExternalLinkAlt className="orcid-link-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Research;
