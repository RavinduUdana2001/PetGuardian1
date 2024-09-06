import React from 'react'
import Pt1Content from '../Pt1Content/Pt1Content'
import Pt2Content from '../Pt2Content/Pt2Content'
import HeaderContent from '../HeaderContent/HeaderContent';
import FooterContent from '../FooterContent/FooterContent';
import TrainingHighlights from '../TrainingHighlights/TrainingHighlights';
import Testimonials from '../Testimonials/Testimonials';

function PettrainingPage() {
  return (
    <div>
        <HeaderContent />
        <Pt1Content/>
        <Pt2Content/>
        <TrainingHighlights/>
        <Testimonials/>
        <FooterContent />
    </div>
  )
}

export default PettrainingPage
