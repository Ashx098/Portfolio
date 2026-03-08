import React from 'react';
import '../styles/huggingface.css';
import { SiHuggingface } from 'react-icons/si';
import { FaDatabase, FaExternalLinkAlt, FaCube } from 'react-icons/fa';

const models = [
  {
    name: 'Mini-LLM',
    description: '80M parameter decoder-only transformer',
    url: 'https://huggingface.co/Ashx098/Mini-LLM'
  },
  {
    name: 'embeddinggemma-300m-single-onnx',
    description: 'ONNX-optimized embedding model',
    url: 'https://huggingface.co/Ashx098/embeddinggemma-300m-single-onnx'
  }
];

const datasets = [
  {
    name: 'Xyne-HS datasets',
    description: 'High-quality datasets for LLM training',
    url: 'https://huggingface.co/Ashx098'
  }
];

const HuggingFace = () => {
  return (
    <section className="huggingface-section" id="huggingface">
      <div className="huggingface-header">
        <SiHuggingface className="hf-logo" />
        <h2 className="huggingface-title">HuggingFace</h2>
        <a 
          href="https://huggingface.co/Ashx098"
          target="_blank"
          rel="noopener noreferrer"
          className="hf-profile-link"
        >
          @Ashx098 <FaExternalLinkAlt />
        </a>
      </div>

      <div className="huggingface-content">
        {/* Models */}
        <div className="hf-category">
          <h3 className="hf-category-title">
            <FaCube /> Models
          </h3>
          <div className="hf-grid">
            {models.map((model, index) => (
              <a 
                href={model.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hf-card"
                key={index}
              >
                <h4>{model.name}</h4>
                <p>{model.description}</p>
                <span className="hf-link">
                  <FaExternalLinkAlt /> View Model
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Datasets */}
        <div className="hf-category">
          <h3 className="hf-category-title">
            <FaDatabase /> Datasets
          </h3>
          <div className="hf-grid">
            {datasets.map((dataset, index) => (
              <a 
                href={dataset.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hf-card"
                key={index}
              >
                <h4>{dataset.name}</h4>
                <p>{dataset.description}</p>
                <span className="hf-link">
                  <FaExternalLinkAlt /> View Dataset
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HuggingFace;
