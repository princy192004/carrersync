import React from 'react';

import participateShowcaseSectionStyles from './participateShowcaseSection.module.scss';

function renderParticipateShowcaseSection(props) {
  return (
    <section className={participateShowcaseSectionStyles.participateShowcaseSection}>
      /*🚩7 Unstructured items require structuring to ensure responsiveness, as code with absolute positioning lacks
      adaptability.❗*/
      <h3
        className={
          participateShowcaseSectionStyles.subtitle
        }>{`Participate, Showcase Skills & Gain CV Points through online & offline opportunities of your interest & make your mark!`}</h3>
      <h1 className={participateShowcaseSectionStyles.hero_title6_box}>
        <span className={participateShowcaseSectionStyles.hero_title6}>
          <span className={participateShowcaseSectionStyles.hero_title6_span0}>explore </span>
          <span className={participateShowcaseSectionStyles.hero_title6_span1}>opportunities</span>
        </span>
      </h1>
      <img
        className={participateShowcaseSectionStyles.image52}
        src={'/assets/bfe83f8f123f36979c0c23d66e346377.png'}
        alt="alt text"
      />
      <img
        className={participateShowcaseSectionStyles.image521}
        src={'/assets/449336930002eeece34f6ce772deaad8.png'}
        alt="alt text"
      />
      <img
        className={participateShowcaseSectionStyles.image522}
        src={'/assets/9fe9422411f79a8d9a0e50a17964829d.png'}
        alt="alt text"
      />
      <h1 className={participateShowcaseSectionStyles.title1}>(7586+)</h1>
      <h1 className={participateShowcaseSectionStyles.hero_title11}>
        working
        <br />
        professionals
      </h1>
    </section>
  );
}

export default renderParticipateShowcaseSection;
