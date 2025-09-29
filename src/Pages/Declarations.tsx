import { useState } from 'react'
import PagerFilter from '../Components/PagerFilter'
import DeclarationsItems from '../Declarations/DeclarationsItems'
import Modal from '../Components/Modal'

function Declarations() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <PagerFilter
        monPlaceHolder = "Faire votre recherche...."
        titre_declaration = "Nouvelle Déclaration"
        onClickButton={()=> setIsOpen(true)}
      />
      <div className='bg-blue-300 shaddow-md rounded-md'>
        <DeclarationsItems/>
      </div>
      <Modal
        isOpen = {isOpen}
        closeModal = {()=> setIsOpen(false)}
        title='Nouvelle Déclaration'
      >
        <p>Crée une nouvell déclaration</p>
      </Modal>
      
    </div>
  )
}

export default Declarations
