import React, { useState, useEffect, useRef } from 'react';
import { Progress } from 'reactstrap';

interface AnimatedSkillBarProps {
  skill: string;
  percentage: string;
  color?: string;
}

const AnimatedSkillBar: React.FC<AnimatedSkillBarProps> = ({ 
  skill, 
  percentage, 
  color = "info" 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targetPercentage = parseInt(percentage);
      const duration = 1500; // Animation duration in ms
      const steps = 60;
      const stepDuration = duration / steps;
      const increment = targetPercentage / steps;

      let currentPercentage = 0;
      const timer = setInterval(() => {
        currentPercentage += increment;
        if (currentPercentage >= targetPercentage) {
          currentPercentage = targetPercentage;
          clearInterval(timer);
        }
        setAnimatedPercentage(Math.round(currentPercentage));
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible, percentage]);

  return (
    <div className="progress-info" ref={progressRef}>
      <div className="progress-label">
        <span>{skill}</span>
      </div>
      <div className="progress-percentage">
        <span>{animatedPercentage}%</span>
      </div>
      <Progress
        max="100"
        value={animatedPercentage}
        color={color}
        role="progressbar"
        aria-label={skill}
        style={{
          transition: 'none',
          height: '10px',
          borderRadius: '5px',
          backgroundColor: '#e9ecef'
        }}
        className="animated-progress-bar"
      />
    </div>
  );
};

export default AnimatedSkillBar;
