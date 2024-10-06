import React from 'react';

import showcaseSkillsSectionStyles from './showcaseSkillsSection.module.scss';

function renderShowcaseSkillsSection(props) {
  return (
    <section className={showcaseSkillsSectionStyles.showcaseSkillsSection}>
      /*🚩18 Unstructured items require structuring to ensure responsiveness, as code with absolute positioning lacks
      adaptability.❗*/
      <div className={showcaseSkillsSectionStyles.color2} />
      <hr className={showcaseSkillsSectionStyles.line} size={1} />
      <hr className={showcaseSkillsSectionStyles.line1} size={1} />
      <img
        className={showcaseSkillsSectionStyles.image20}
        src={'/assets/cb9c90887db370b02994c8f972cf8cb3.png'}
        alt="alt text"
      />
      <img
        className={showcaseSkillsSectionStyles.image21}
        src={'/assets/157d6358c637036b90bb2601fc0473cb.png'}
        alt="alt text"
      />
      <img
        className={showcaseSkillsSectionStyles.image22}
        src={'/assets/2d688541dbecc9094f7903f8a7b8a61e.png'}
        alt="alt text"
      />
      <img
        className={showcaseSkillsSectionStyles.image23}
        src={'/assets/bc6e7ba394a6f91b152200e7f166fdb9.png'}
        alt="alt text"
      />
      <img
        className={showcaseSkillsSectionStyles.image24}
        src={'/assets/2b92a848173a278c15e217c2859e0b21.png'}
        alt="alt text"
      />
      <img
        className={showcaseSkillsSectionStyles.image25}
        src={'/assets/bfaf64965fe1064adea33baae777dd11.png'}
        alt="alt text"
      />
      <img
        className={showcaseSkillsSectionStyles.image26}
        src={'/assets/751282fcc5070e26b152fb720935c310.png'}
        alt="alt text"
      />
      <img
        className={showcaseSkillsSectionStyles.image48}
        src={'/assets/6dc2603828ef5a63adc41ab0b72c97f8.png'}
        alt="alt text"
      />
      <img
        className={showcaseSkillsSectionStyles.image49}
        src={'/assets/7387405091e76bc1e7ebed12456165b4.png'}
        alt="alt text"
      />
      <img
        className={showcaseSkillsSectionStyles.image50}
        src={'/assets/9a5266d47f5a22ff9dd09c7fa9c6f274.png'}
        alt="alt text"
      />
      <img
        className={showcaseSkillsSectionStyles.image51}
        src={'/assets/beba58d60bd17ee6a5a45b5d9323a830.png'}
        alt="alt text"
      />
      <h3
        className={
          showcaseSkillsSectionStyles.subtitle
        }>{`Participate, Showcase Skills & Gain knowledge through online & offline opportunities of your interest & make your Skills!`}</h3>
      <h1 className={showcaseSkillsSectionStyles.hero_title10}>explore  projects</h1>
      <div className={showcaseSkillsSectionStyles.color25} />
      <p className={showcaseSkillsSectionStyles.highlight}>Explore More</p>
    </section>
  );
}

export default renderShowcaseSkillsSection;
