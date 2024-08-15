import React, { useState } from 'react';

const CircleCard = ({ percentage, label }) => {
  const [animationKey, setAnimationKey] = useState(0);

  const refreshAnimation = () => {
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <div
      style={styles.card}
      onMouseEnter={refreshAnimation}
    >
      <div className="skill" style={styles.skill}>
        <div className="outer" style={styles.outer}>
          <div className="inner" style={styles.inner}>
            <div id="number" style={styles.number}>
              {percentage}%
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
          style={styles.svg}
          key={animationKey}
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stop-color="#e91e63" />
              <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
          </defs>
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke-linecap="round"
            fill="none"
            stroke="url(#GradientColor)"
            strokeWidth="20px"
            strokeDasharray="472"
            strokeDashoffset={`${472 - (472 * percentage) / 100}`}
            style={{
              animation: `anim 2s linear forwards`,
            }}
          />
        </svg>
      </div>
      <div style={styles.label}>{label}</div>
    </div>
  );
};

const CircleCards = () => {
  const circlesData = [
    { percentage: 65, label: 'AI' },
    { percentage: 80, label: 'Machine Learning' },
    { percentage: 50, label: 'Math' },
    { percentage: 90, label: 'Web Development' },
    { percentage: 75, label: 'Data Analysis' },
  ];

  return (
    <div style={styles.cover}>
      <div style={styles.blurredBackground}></div>
      <div style={styles.cardContainer}>
        {circlesData.map((circle, index) => (
          <CircleCard
            key={index}
            percentage={circle.percentage}
            label={circle.label}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  cover: {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
  },
  blurredBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    filter: 'blur(10px)',
    zIndex: 1,
  },
  cardContainer: {
    display: 'flex',
    gap: '20px',
    zIndex: 2,
  },
  card: {
    width: '200px',
    height: '250px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow:
      '6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
  },
  skill: {
    width: '160px',
    height: '160px',
    position: 'relative',
  },
  outer: {
    height: '160px',
    width: '160px',
    borderRadius: '50%',
    padding: '20px',
    boxShadow:
      '6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7)',
  },
  inner: {
    height: '120px',
    width: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    boxShadow:
      'inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px -0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05)',
  },
  number: {
    fontWeight: 600,
    color: '#555',
  },
  svg: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  label: {
    marginTop: '15px',
    fontSize: '18px',
    fontWeight: 600,
    color: '#333',
  },
};

export default CircleCards;
