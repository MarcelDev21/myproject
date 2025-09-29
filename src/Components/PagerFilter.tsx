type Props = {
    monPlaceHolder : string
    titre_declaration? :string
    onClickButton? : () => void
}

function PagerFilter(props : Props) {
    const {monPlaceHolder, titre_declaration, onClickButton} = props
  return (
    <div className="flex justify-between items-center">
        <input 
        id= "rechercher"
        type="text" 
        placeholder={monPlaceHolder}
        className="border border-gray-400 w-100 rounded-md p-1"/>

        {
          titre_declaration ? 
          <button      
          onClick={onClickButton}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">{titre_declaration}</button>
          : null
        }
    </div>
  )
}

export default PagerFilter
