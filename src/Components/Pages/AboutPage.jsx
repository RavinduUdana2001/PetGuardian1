import React from 'react'
import HeaderContent from '../HeaderContent/HeaderContent'
import FooterContent from '../FooterContent/FooterContent';
import AboutTopSection from '../AboutTopSection/AboutTopSection';
import VisionMissionSection from '../VisionMissionSection/VisionMissionSection';
import AchievementsValuesSection from '../AchievementsValuesSection/AchievementsValuesSection';
import ClientTestimonialsSection from '../ClientTestimonialsSection/ClientTestimonialsSection';

function AboutPage() {
  return (
    <div>
        <HeaderContent/>
        <AboutTopSection/>
        <VisionMissionSection/>
        <AchievementsValuesSection/>
        <ClientTestimonialsSection/>
        <FooterContent />
    </div>
  )
}

export default AboutPage
