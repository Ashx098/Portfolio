import React from 'react';
import '../styles/opensource.css';
import { FaGithub, FaCodeBranch, FaStar } from 'react-icons/fa';

const contributions = [
  {
    project: 'LangChainJS',
    org: 'langchain-ai',
    description: 'Merged PR fixing OpenAI SDK error handling',
    details: 'core: read error.status when response.status is absent to avoid retrying OpenAI SDK 4xx',
    prUrl: 'https://github.com/langchain-ai/langchainjs/pull/9817',
    type: 'merged',
    impact: 'Fixed critical error handling bug'
  }
];

const orgs = [
  {
    name: 'Asthra Labs',
    description: 'Independent AI Systems Experiments',
    url: 'https://github.com/orgs/Asthra-Labs',
    repos: ['MOE-XRAY', 'CodeGraph']
  }
];

const OpenSource = () => {
  return (
    <section className="opensource-section" id="opensource">
      <h2 className="opensource-title">Open Source</h2>
      
      <div className="opensource-content">
        {/* Contributions */}
        <div className="opensource-category">
          <h3 className="category-title">
            <FaCodeBranch /> Contributions
          </h3>
          {contributions.map((contrib, index) => (
            <div className="contribution-card" key={index}>
              <div className="contribution-header">
                <div className="project-info">
                  <h4>{contrib.project}</h4>
                  <span className="org-name">{contrib.org}</span>
                </div>
                <span className="merged-badge">
                  <FaCodeBranch /> Merged
                </span>
              </div>
              <p className="contribution-desc">{contrib.description}</p>
              <div className="pr-details">
                <code>{contrib.details}</code>
              </div>
              <div className="contribution-meta">
                <span className="impact">{contrib.impact}</span>
                <a 
                  href={contrib.prUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pr-link"
                >
                  <FaGithub /> View PR
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Organizations */}
        <div className="opensource-category">
          <h3 className="category-title">
            <FaStar /> Organizations
          </h3>
          {orgs.map((org, index) => (
            <a 
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="org-card"
              key={index}
            >
              <div className="org-header">
                <div className="org-avatar">{org.name[0]}</div>
                <div className="org-info">
                  <h4>{org.name}</h4>
                  <p>{org.description}</p>
                </div>
              </div>
              <div className="org-repos">
                <span className="repos-label">Repositories:</span>
                <div className="repos-list">
                  {org.repos.map((repo, i) => (
                    <span className="repo-tag" key={i}>{repo}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
