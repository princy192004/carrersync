import React from 'react';

import jobOpportunitiesSectionStyles from './jobOpportunitiesSection.module.scss';

function renderJobOpportunitiesSection(props) {
  return (
    <section className={jobOpportunitiesSectionStyles.jobOpportunitiesSection}>
      /*🚩20 Unstructured items require structuring to ensure responsiveness, as code with absolute positioning lacks
      adaptability.❗*/
      <div className={jobOpportunitiesSectionStyles.color8} />
      <img
        className={jobOpportunitiesSectionStyles.decorator5}
        src={'/assets/fcfcc6b483c8861bbbc8192f54ea8718.svg'}
        alt="alt text"
      />
      <h3
        className={
          jobOpportunitiesSectionStyles.subtitle1
        }>{`Work with your dream companies by applying to hiring challenges and full-time & part-time jobs/internships.`}</h3>
      <h1 className={jobOpportunitiesSectionStyles.hero_title6_box}>
        <span className={jobOpportunitiesSectionStyles.hero_title6}>
          <span className={jobOpportunitiesSectionStyles.hero_title6_span0}>Get </span>
          <span className={jobOpportunitiesSectionStyles.hero_title6_span1}>hired!</span>
        </span>
      </h1>
      <div className={jobOpportunitiesSectionStyles.color9} />
      <img
        className={jobOpportunitiesSectionStyles.image27}
        src={'/assets/499f2779e362865aebe7d263022acb09.png'}
        alt="alt text"
      />
      <h2 className={jobOpportunitiesSectionStyles.medium_title1}>
        college
        <br />
        Students
      </h2>
      <div className={jobOpportunitiesSectionStyles.text}>open to</div>
      <div className={jobOpportunitiesSectionStyles.color10} />
      <img
        className={jobOpportunitiesSectionStyles.image28}
        src={'/assets/8a45a2b09a6247e4974dd119aad7d82d.png'}
        alt="alt text"
      />
      <h2 className={jobOpportunitiesSectionStyles.medium_title2}>
        working
        <br />
        professionals
      </h2>
      <p className={jobOpportunitiesSectionStyles.highlight1}>open to</p>
      <div className={jobOpportunitiesSectionStyles.color11} />
      <img
        className={jobOpportunitiesSectionStyles.image29}
        src={'/assets/bedd64244930817479fca45254aa3616.png'}
        alt="alt text"
      />
      <h2 className={jobOpportunitiesSectionStyles.medium_title3}>
        team
        <br />
        participation
      </h2>
      <div className={jobOpportunitiesSectionStyles.text1}>open to</div>
      <div className={jobOpportunitiesSectionStyles.color12} />
      <img
        className={jobOpportunitiesSectionStyles.image281}
        src={'/assets/b7f7010dff255a06770caa3c0601880b.png'}
        alt="alt text"
      />
      <h2 className={jobOpportunitiesSectionStyles.medium_title11}>
        individual
        <br />
        participation
      </h2>
      <div className={jobOpportunitiesSectionStyles.text2}>open to</div>
    </section>
  );
}

export default renderJobOpportunitiesSection;
