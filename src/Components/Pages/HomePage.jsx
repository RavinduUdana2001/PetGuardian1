import React from 'react'
import BodyContent from '../BodyContent/BodyContent';
import DetailContent from '../DetailContent/DetailContent';
import SecondContent from '../SecondContent/SecondContent';
import PetCategories from '../PetCategories/PetCategories';
import DescriptionSection from '../DescriptionSection/DescriptionSection';
import BookAConsultation from '../BookAConsultation/BookAConsultation';
import EventList from '../EventList/EventList';
import HeaderContent from '../HeaderContent/HeaderContent';
import FooterContent from '../FooterContent/FooterContent';



function HomePage() {
  return (
    <div>
      <HeaderContent/>
      <BodyContent/>
      <DetailContent/>
      <EventList/>
      <SecondContent/>
      <PetCategories/>
      <BookAConsultation/>
      <DescriptionSection/>
      <FooterContent/>
    </div>
  )
}

export default HomePage