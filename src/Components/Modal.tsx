type monModal = {
    isOpen : boolean,
    closeModal : () => void,
    title: string,
    children: React.ReactNode
}

function Modal(props: monModal) {
    const {isOpen, closeModal, title, children} = props 
  return (
    <>
         {isOpen && (
        <div 
        style={{ backgroundColor: "rgba(0,0,0,0.2)" }} 
        className="fixed inset-0 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl w-11/12 max-w-md p-6 relative shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 font-bold text-xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            
            {
                children
            }
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
