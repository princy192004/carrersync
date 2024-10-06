import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import renderLoginSection from './loginSection';
import renderHeroImageSection from './heroImageSection';
import renderHeroSection_1 from './heroSection_1';
import renderShowcaseSkillsSection from './showcaseSkillsSection';
import renderParticipateShowcaseSection from './participateShowcaseSection';
import renderJobOpportunitiesSection from './jobOpportunitiesSection';
import renderLearningSection from './learningSection';
import renderFeaturedOpportunitiesSection from './featuredOpportunitiesSection';
import renderStatisticsSection from './statisticsSection';
import renderUpdateSection from './updateSection';
import renderContactInformationSection from './contactInformationSection';

import styles from './index.module.scss';

function UntitledPage(props) {
  return (
    <main className={cn(styles.main, props.className, 'untitled-page')}>
      {renderLoginSection(props)}
      {renderHeroImageSection(props)}
      {renderHeroSection_1(props)}
      {renderShowcaseSkillsSection(props)}
      {renderParticipateShowcaseSection(props)}
      {renderJobOpportunitiesSection(props)}
      {renderLearningSection(props)}
      {renderFeaturedOpportunitiesSection(props)}
      {renderStatisticsSection(props)}
      {renderUpdateSection(props)}
      {renderContactInformationSection(props)}
    </main>
  );
}

UntitledPage.propTypes = {
  className: PropTypes.string
};

export default UntitledPage;
