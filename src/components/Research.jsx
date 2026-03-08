import React from 'react';
import '../styles/research.css';
import { FaFilePdf, FaExternalLinkAlt, FaIdCard } from 'react-icons/fa';

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
    abstract: 'Visual Assessment of Cluster Tendency (VAT) is a widely used unsupervised technique to assess the presence of cluster structure in unlabeled datasets. However, its standard implementation suffers from significant performance limitations due to its O(n²) time complexity and inefficient memory usage. In this work, we present Fast-VAT, a high-performance reimplementation of the VAT algorithm in Python, augmented with Numba\'s Just-In-Time (JIT) compilation and Cython\'s static typing and low-level memory optimizations. Our approach achieves up to 50x speedup over the baseline implementation, while preserving the output fidelity of the original method.',
    subjects: 'Machine Learning (cs.LG); Neural and Evolutionary Computing (cs.NE)',
    url: 'https://arxiv.org/abs/2507.15904',
    arxivId: 'arXiv:2507.15904'
  },
  {
    title: 'Profiling LoRA/QLoRA Fine-Tuning Efficiency on Consumer GPUs: An RTX 4060 Case Study',
    authors: 'MSR Avinash',
    abstract: 'Fine-tuning large language models (LLMs) with parameter-efficient techniques such as LoRA and QLoRA has enabled adaptation of foundation models on modest hardware. Yet the efficiency of such training on consumer-grade GPUs, especially under strict 8 GB VRAM limits, remains underexplored. We present a controlled profiling study of LoRA/QLoRA fine-tuning using the Qwen2.5-1.5B-Instruct model on a single NVIDIA RTX 4060. Across three representative configurations, we systematically vary batch size, sequence length, optimizer choice (AdamW vs. PagedAdamW), and precision (fp16 vs. bf16).',
    subjects: 'Machine Learning (cs.LG); Artificial Intelligence (cs.AI); Performance (cs.PF)',
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
              <div className="preprint-card-full" key={index}>
                <div className="preprint-header">
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
                <p className="preprint-authors">{preprint.authors}</p>
                <p className="preprint-abstract">{preprint.abstract}</p>
                <div className="preprint-subjects">
                  <span className="subjects-label">Subjects:</span>
                  <span className="subjects-list">{preprint.subjects}</span>
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
