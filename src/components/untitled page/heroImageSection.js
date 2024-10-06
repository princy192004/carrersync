import React from 'react';

import heroImageSectionStyles from './heroImageSection.module.scss';

function renderHeroImageSection(props) {
  return (
    <section className={heroImageSectionStyles.heroImageSection}>
      <img
        className={heroImageSectionStyles.heroImage}
        src={'/assets/4cf5cc49a4a9eea3cdd5445b9314f3ad.png'}
        alt="alt text"
      />
    </section>
  );
}

export default renderHeroImageSection;
