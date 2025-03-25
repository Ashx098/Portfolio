import React from "react";
import "../styles/achievements.css";
import { FaMedal, FaTrophy, FaStar } from "react-icons/fa";

const achievements = [
  {
    icon: <FaTrophy />,
    title: "Kaggle Titanic Top 200",
    description:
      "Ranked in the top 200 in the Titanic ML competition. Focused on model tuning & EDA.",
    link: "https://github.com/Ashx098/Kaggle-Spaceship-Titanic"
  },
  {
    icon: <FaMedal />,
    title: "Published 3 Kaggle Datasets",
    description:
      "Created and shared valuable datasets like NVIDIA Volatility (2014–2024).",
    link: "https://www.kaggle.com/datasets/avinashmynampati/nvidia-stock-volatility-20142024"
  },
  {
    icon: <FaStar />,
    title: "PyPI Package: cleanflo",
    description:
      "Launched a beginner-friendly Python data cleaning library. Currently under maintenance.",
    link: "https://github.com/Ashx098/cleanflo"
  }
];

const Achievements = () => {
  return (
    <section className="achievements-section" id="achievements">
      <h2 className="achievements-title">Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((ach, index) => (
          <a
            className="achievement-card"
            href={ach.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <div className="achievement-icon">{ach.icon}</div>
            <h3>{ach.title}</h3>
            <p>{ach.description}</p>
          </a>
        ))}
      </div>
    </section>

  );
};

export default Achievements;