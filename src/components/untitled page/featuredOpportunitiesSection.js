import React from 'react';

import featuredOpportunitiesSectionStyles from './featuredOpportunitiesSection.module.scss';

function renderFeaturedOpportunitiesSection(props) {
  return (
    <section className={featuredOpportunitiesSectionStyles.featuredOpportunitiesSection}>
      /*🚩28 Unstructured items require structuring to ensure responsiveness, as code with absolute positioning lacks
      adaptability.❗*/
      <img
        className={featuredOpportunitiesSectionStyles.cover2}
        src={'/assets/0f6fd71c17012451df4208597a23a0e1.png'}
        alt="alt text"
      />
      <img
        className={featuredOpportunitiesSectionStyles.cover21}
        src={'/assets/8554f18f1dc2096173f557f1fe2e8703.png'}
        alt="alt text"
      />
      <div className={featuredOpportunitiesSectionStyles.color2} />
      <img
        className={featuredOpportunitiesSectionStyles.image11}
        src={'/assets/4382d7f0f59f5c8598adbdc742b049a8.svg'}
        alt="alt text"
      />
      <h3 className={featuredOpportunitiesSectionStyles.subtitle}>
        Participate in these exceptional opportunities curated for the exceptional you!
      </h3>
      <h1 className={featuredOpportunitiesSectionStyles.hero_title6_box}>
        <span className={featuredOpportunitiesSectionStyles.hero_title6}>
          <span className={featuredOpportunitiesSectionStyles.hero_title6_span0}>Featured </span>
          <span className={featuredOpportunitiesSectionStyles.hero_title6_span1}>Opportunities</span>
        </span>
      </h1>
      <h1 className={featuredOpportunitiesSectionStyles.title}>consulting 101 - webinar   register for free.</h1>
      <div className={featuredOpportunitiesSectionStyles.color13} />
      <div className={featuredOpportunitiesSectionStyles.color14} />
      <div className={featuredOpportunitiesSectionStyles.color15} />
      <img
        className={featuredOpportunitiesSectionStyles.image30}
        src={'/assets/dd98192c08154ef67c91365edcba6c5e.png'}
        alt="alt text"
      />
      <img
        className={featuredOpportunitiesSectionStyles.image32}
        src={'/assets/ffc91000d5a5f5a66f035eaaa775f2a4.svg'}
        alt="alt text"
      />
      <p className={featuredOpportunitiesSectionStyles.highlight2}>948 registered</p>
      <div className={featuredOpportunitiesSectionStyles.color16} />
      <div className={featuredOpportunitiesSectionStyles.color17} />
      <img
        className={featuredOpportunitiesSectionStyles.image33}
        src={'/assets/0309fe19222cdd2515b7bd6eccd91533.png'}
        alt="alt text"
      />
      <p className={featuredOpportunitiesSectionStyles.highlight21}>14 days left</p>
      <hr className={featuredOpportunitiesSectionStyles.line1} size={1} />
      <h1 className={featuredOpportunitiesSectionStyles.title1}>
        Win a brand new hero deluxe HF and Amazon vouchers worth INR 30,000
      </h1>
      <div className={featuredOpportunitiesSectionStyles.color141} />
      <div className={featuredOpportunitiesSectionStyles.color151} />
      <img
        className={featuredOpportunitiesSectionStyles.image301}
        src={'/assets/739496362532116634224e93c8491960.png'}
        alt="alt text"
      />
      <img
        className={featuredOpportunitiesSectionStyles.image321}
        src={'/assets/66d3db7f41da10349460a1c94606d042.svg'}
        alt="alt text"
      />
      <p className={featuredOpportunitiesSectionStyles.highlight22}>948 registered</p>
      <div className={featuredOpportunitiesSectionStyles.color161} />
      <div className={featuredOpportunitiesSectionStyles.color171} />
      <img
        className={featuredOpportunitiesSectionStyles.image331}
        src={'/assets/1c695edae9bb034e827c0451c33c87ac.png'}
        alt="alt text"
      />
      <p className={featuredOpportunitiesSectionStyles.highlight23}>14 days left</p>
    </section>
  );
}

export default renderFeaturedOpportunitiesSection;
