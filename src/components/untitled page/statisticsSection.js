import React from 'react';

import statisticsSectionStyles from './statisticsSection.module.scss';

function renderStatisticsSection(props) {
  return (
    <section className={statisticsSectionStyles.statisticsSection}>
      /*🚩11 Unstructured items require structuring to ensure responsiveness, as code with absolute positioning lacks
      adaptability.❗*/
      <div className={statisticsSectionStyles.color2} />
      <h1 className={statisticsSectionStyles.hero_title6_box}>
        <span className={statisticsSectionStyles.hero_title6}>
          <span className={statisticsSectionStyles.hero_title6_span0}>our </span>
          <span className={statisticsSectionStyles.hero_title6_span1}>numbers</span>
        </span>
      </h1>
      <img
        className={statisticsSectionStyles.cover9}
        src={'/assets/7569f3b82dee29b66f0f6077754eb58e.svg'}
        alt="alt text"
      />
      <h1 className={statisticsSectionStyles.hero_title7}>5.3 Mn+</h1>
      <h3 className={statisticsSectionStyles.subtitle4}>Active Users</h3>
      <img
        className={statisticsSectionStyles.image45}
        src={'/assets/49b7138a070c86e646da0ae5ad5f2a8a.svg'}
        alt="alt text"
      />
      <h1 className={statisticsSectionStyles.hero_title8}>130K+</h1>
      <h3 className={statisticsSectionStyles.subtitle41}>Opportunities</h3>
      <img
        className={statisticsSectionStyles.image451}
        src={'/assets/40745fe195d625c7e737d487fb0f403f.svg'}
        alt="alt text"
      />
      <h1 className={statisticsSectionStyles.hero_title9}>42K+</h1>
      <h3 className={statisticsSectionStyles.subtitle42}>Organisations</h3>
    </section>
  );
}

export default renderStatisticsSection;
