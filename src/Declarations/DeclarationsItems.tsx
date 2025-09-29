import { BiSort } from "react-icons/bi";
function DeclarationsItems() {
  return (
    <div className="mt-3">
      <article className="flex  w-full items-center">
        <span className="p-2 flex-1 flex items-center gap-1">
          Date
          <BiSort />
          </span>
        <span className="p-2 flex-1">Enfant</span>
        <span className="p-2 flex-1 ">Date de Naissance</span>
        <span className="p-2 flex-1 ">Hopital de Naissance</span>
        <span className="p-2 flex-1 ">Parent I</span>
        <span className="p-2 flex-1 ">Parent II</span>
        <span className="p-2 flex-1  flex items-center gap-1">
          Statut
          <BiSort />
          </span>
        <span className="p-2 flex-1">Actions</span>
      </article>
    </div>
  )
}

export default DeclarationsItems
