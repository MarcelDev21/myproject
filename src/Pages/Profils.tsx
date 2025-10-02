import { useState } from "react";
import PagerFilter from "../Components/PagerFilter"
import ProfileItems from "../Profiles/ProfileItems"
import Modal from "../Components/Modal";
import FormProfile from "../Profiles/FormProfile";

function Profils() {
  const [isOpen, setIsOpen] =useState(false)

  return (
    <div>
       <PagerFilter
        monPlaceHolder = "Rechercher un Agent"
        titre_declaration = "Nouvel Agent"
        onClickButton={()=> setIsOpen(true)} 
      />
      
      <div>
        <ProfileItems/>
      </div>

      <Modal
        isOpen = {isOpen}
        closeModal = {()=> setIsOpen(false)}
        title = "Presentation du modal"
      >
        <FormProfile/>
      </Modal>
    </div>
  )
}

export default Profils
