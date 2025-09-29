import { useState } from "react";
import PagerFilter from "../Components/PagerFilter"
import ProfileItems from "../Profiles/ProfileItems"
import Modal from "../Components/Modal";

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
        <p>Mon Corps du sujet</p>
      </Modal>
    </div>
  )
}

export default Profils
