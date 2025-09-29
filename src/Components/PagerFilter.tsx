import { Link } from "react-router"

type Props = {
    monPlaceHolder : string
    titre_declaration :string
}

function PagerFilter(props : Props) {
    const {monPlaceHolder, titre_declaration} = props
  return (
    <div className="flex justify-between items-center">
        <input 
        id= "rechercher"
        type="text" 
        placeholder={monPlaceHolder}
        className="border border-gray-400 w-100 rounded-md p-1"/>

        <Link to="" className="bg-green-600 rounded-md p-2 text-white hover:bg-green-700"> {titre_declaration}</Link>
    </div>
  )
}

export default PagerFilter
