import PagerFilter from '../Components/PagerFilter'
import DeclarationsItems from '../Declarations/DeclarationsItems'
import { useNavigate } from 'react-router'

function Declarations() {
  const navigate = useNavigate()
  return (
    <div>
      <PagerFilter
        monPlaceHolder = "Faire votre recherche...."
        titre_declaration = "Nouvelle Déclaration"
        onClickButton={()=> navigate("/private/newDeclarations")}
      />
      <div className='bg-blue-300 shaddow-md rounded-md'>
        <DeclarationsItems/>
      </div>
    </div>
  )
}

export default Declarations
