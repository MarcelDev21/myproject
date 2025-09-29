import PagerFilter from '../Components/PagerFilter'
import DemandeItems from '../Demandes/DemandeItems'

function Demandes() {
  return (
    <div>
      <PagerFilter
        monPlaceHolder = "Faites votre recherche"
      />
      <div className='bg-blue-300 shadow-md rounded-md'>
       <DemandeItems/>
      </div>
    </div>
  )
}

export default Demandes
