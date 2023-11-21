import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

function Shop(props) {
    const { shop, deleteShop, index } = props
    const [isAdded, setIsAdded] = useState(shop.status)

    const toogleBtn = () => {
        setIsAdded(!isAdded)
    }

    return (
        <div className="flex justify-between items-center border-b border-solid border-gray-400 m-1 md:m-10 px-1 md:px-8 pb-2 md:pb-5">
            
            <div className="flex justify-start items-center gap-1 text-base md:text-xl md:font-bold">
                <p>{index + 1}. </p>
                <p>{shop.title}</p>
            </div>
               
            <div className="flex justify-end items-center gap-4 md:gap-7">
                <p className="p-2 bg-indigo-800 text-white rounded-lg">{isAdded ? 'Добавлено!' : 'Добавить!'}</p>              
        
                <button onClick={toogleBtn}>
                    {isAdded ? <MinusIcon className="w-10 h-10 p-2 bg-green-700 hover:bg-green-900 text-white rounded-lg" />
                    : <PlusIcon className="w-10 h-10 p-2 bg-green-700 hover:bg-green-900 text-white rounded-lg" /> 
                    } 
                </button>

                <p onClick={() => deleteShop(shop.id)} 
                    className="p-2 cursor-pointer border border-red-700 hover:bg-red-200 rounded-lg shadow-md">
                    <TrashIcon className="w-6 h-6 stroke-red-700" />
                </p>
            </div>
        </div>
    )
}

export default Shop