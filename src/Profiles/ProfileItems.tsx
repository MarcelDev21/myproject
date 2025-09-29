import { useState } from "react";
import Modal from "../Components/Modal";

function ProfileItems() {
    const [isOpen, setIsOpen] = useState(false)
    const data = [
        {
          id: 1,
          title: "Card 1",
          description: "Ceci est la première carte",
          image: "https://picsum.photos/300/200?random=1"
        },
        {
          id: 2,
          title: "Card 2",
          description: "Deuxième carte affichée",
          image: "https://picsum.photos/300/200?random=2"
        },
        {
          id: 3,
          title: "Card 3",
          description: "Encore une autre carte",
          image: "https://picsum.photos/300/200?random=3"
        },
        {
          id: 4,
          title: "Card 3",
          description: "Encore une autre carte",
          image: "https://picsum.photos/300/200?random=3"
        }
      ];
  return (
    <div className="mt-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {
                data.map((item) => (
                    <div 
                    key={item.id}
                    className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                        <div className="flex flex-col sm:flex-row justify-between items-center p-2 gap-2">
                            <div>
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                            <div>
                                <button
                                    onClick={() => setIsOpen(true)}
                                    className="bg-green-600 rounded-md p-2 text-white hover:bg-green-700"
                                >
                                    Voir Plus de Detail 
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }

            <Modal
                isOpen = {isOpen}
                closeModal = {()=> setIsOpen(false)}
                title="Presentation du detail du user"
            >
                <p>Voir le detail d un user</p>
            </Modal>
        </div>
    </div>
  )
}

export default ProfileItems
