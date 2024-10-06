import React from 'react';

import updateSectionStyles from './updateSection.module.scss';

function renderUpdateSection(props) {
  return (
    <section className={updateSectionStyles.updateSection}>
      /*🚩11 Unstructured items require structuring to ensure responsiveness, as code with absolute positioning lacks
      adaptability.❗*/
      <div className={updateSectionStyles.color18} />
      <h1 className={updateSectionStyles.hero_title6_box}>
        <span className={updateSectionStyles.hero_title6}>
          <span className={updateSectionStyles.hero_title6_span0}>Stay </span>
          <span className={updateSectionStyles.hero_title6_span1}>Updated</span>
        </span>
      </h1>
      <h3
        className={
          updateSectionStyles.subtitle3
        }>{`We'll send you updates on the latest opportunities to showcase your talent and get hired and rewarded regularly.`}</h3>
      <div className={updateSectionStyles.color20} />
      <div className={updateSectionStyles.color21} />
      <img
        className={updateSectionStyles.image38}
        src={'/assets/95138698f46dcebee1defae8f14ba757.svg'}
        alt="alt text"
      />
      <div className={updateSectionStyles.color22} />
      <p className={updateSectionStyles.highlight}>Publish Opportunity</p>
      <div className={updateSectionStyles.color23} />
      <p className={updateSectionStyles.highlight4}>Share your story now</p>
      <h2 className={updateSectionStyles.medium_title5}>enter your email address</h2>
    </section>
  );
}

export default renderUpdateSection;
