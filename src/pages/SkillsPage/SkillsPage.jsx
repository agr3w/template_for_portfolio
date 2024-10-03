// src/pages/Skills.jsx
import React from 'react';
import Skills from 'components/Skills/Skills';
import styles from './SkillsPage.module.css';

const SkillsPage = ({ skills }) => {
  return (
    <div className={styles.skillsPage}>
      <Skills skills={skills} />
    </div>
  );
};

export default SkillsPage;
