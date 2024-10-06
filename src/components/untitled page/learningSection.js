import React from 'react';

import learningSectionStyles from './learningSection.module.scss';

function renderLearningSection(props) {
  return (
    <section className={learningSectionStyles.learningSection}>
      /*🚩15 Unstructured items require structuring to ensure responsiveness, as code with absolute positioning lacks
      adaptability.❗*/
      <div className={learningSectionStyles.color26} />
      <img
        className={learningSectionStyles.image53}
        src={'/assets/b23141bff53ed8690b1acc48cacdf8f1.png'}
        alt="alt text"
      />
      <img
        className={learningSectionStyles.image531}
        src={'/assets/99917495517cfd063e3ca211ec3f32fd.png'}
        alt="alt text"
      />
      <img
        className={learningSectionStyles.image54}
        src={'/assets/f6d65f17894798a1279634df7f60e5fa.png'}
        alt="alt text"
      />
      <h1 className={learningSectionStyles.big_title}>Learn</h1>
      <div className={learningSectionStyles.color27} />
      <img
        className={learningSectionStyles.image55}
        src={'/assets/081d9608e80c890959830ca9c40f0288.png'}
        alt="alt text"
      />
      <img
        className={learningSectionStyles.image56}
        src={'/assets/0cdda602deb0eafb0aff962694455a75.png'}
        alt="alt text"
      />
      <img
        className={learningSectionStyles.image57}
        src={'/assets/587c5ac6ebe0552e315ab05e4fa3180c.png'}
        alt="alt text"
      />
      <h1 className={learningSectionStyles.big_title1}>ai assessment</h1>
      <div className={learningSectionStyles.color28} />
      <img
        className={learningSectionStyles.image58}
        src={'/assets/8cb079bcb748e7cf7d4a95a7bf474615.png'}
        alt="alt text"
      />
      <img
        className={learningSectionStyles.image581}
        src={'/assets/1078f6b50d19c20e5c20d0670845f96a.png'}
        alt="alt text"
      />
      <img
        className={learningSectionStyles.image59}
        src={'/assets/07d9e9a9f1cdba643ca91db2b8c50527.png'}
        alt="alt text"
      />
      <h1 className={learningSectionStyles.big_title2}>mentorships</h1>
    </section>
  );
}

export default renderLearningSection;
