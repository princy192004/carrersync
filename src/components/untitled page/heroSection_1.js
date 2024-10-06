import React from 'react';

import heroSection_1Styles from './heroSection_1.module.scss';

function renderHeroSection_1(props) {
  return (
    <section className={heroSection_1Styles.heroSection_1}>
      /*🚩11 Unstructured items require structuring to ensure responsiveness, as code with absolute positioning lacks
      adaptability.❗*/
      <img
        className={heroSection_1Styles.image14}
        src={'/assets/258cc1405d57bd7bd99f94834b00f580.svg'}
        alt="alt text"
      />
      <img className={heroSection_1Styles.cover3} src={'/assets/2eb61d3fcc6e9a42b68e7acc3d1fcc14.png'} alt="alt text" />
      <img className={heroSection_1Styles.cover4} src={'/assets/2eb61d3fcc6e9a42b68e7acc3d1fcc14.png'} alt="alt text" />
      <img className={heroSection_1Styles.cover5} src={'/assets/2eb61d3fcc6e9a42b68e7acc3d1fcc14.png'} alt="alt text" />
      <h1 className={heroSection_1Styles.hero_title1}>learn</h1>
      <h1 className={heroSection_1Styles.hero_title2}>ai feedback</h1>
      <h1 className={heroSection_1Styles.hero_title3}>mentorships</h1>
      <h1 className={heroSection_1Styles.hero_title4}>jobs</h1>
      <h1 className={heroSection_1Styles.hero_title5_box}>
        <span className={heroSection_1Styles.hero_title5}>
          <span className={heroSection_1Styles.hero_title5_span0}>Industry veterans</span>
          <span className={heroSection_1Styles.hero_title5_span1}> </span>
          <span className={heroSection_1Styles.hero_title5_span2}>trust us:</span>
        </span>
      </h1>
      <img
        className={heroSection_1Styles.cover10}
        src={'/assets/fda867fe7a80ece088ab06d6b8b849c0.png'}
        alt="alt text"
      />
      <h1 className={heroSection_1Styles.hero_title51}>projects</h1>
    </section>
  );
}

export default renderHeroSection_1;
