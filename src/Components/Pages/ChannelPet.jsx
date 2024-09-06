import React from 'react'
import HeaderContent from '../HeaderContent/HeaderContent'
import BookAConsultation from '../BookAConsultation/BookAConsultation'
import FooterContent from '../FooterContent/FooterContent'
import ChannelYourPetTips from '../ChannelYourPetTips/ChannelYourPetTips'
import ChannelYourPetIntro from '../ChannelYourPetIntro/ChannelYourPetIntro'

function ChannelPet() {
  return (
    <div>
        <HeaderContent/>
        <BookAConsultation/>
        <ChannelYourPetTips/>
        <FooterContent/>
    </div>
  )
}

export default ChannelPet