import Header from "components/Header"
import Shop from "components/Shop"
import Footer from "components/Footer"
import { useState } from "react"
import uuid4 from "uuid4"

function App() {
    
    const [shops, setShops] = useState([
        {
            id: uuid4(),
            title: 'Молоко',
            status: false
        },
        {
            id: uuid4(),
            title: 'Хлеб',
            status: false
        },
        {
            id: uuid4(),
            title: 'Шоколад',
            status: false
        },
        {
            id: uuid4(),
            title: 'Яйца',
            status: false
        },
        {
            id: uuid4(),
            title: 'Апельсины',
            status: false
        },
        {
            id: uuid4(),
            title: 'Бананы',
            status: false
        },
        {
            id: uuid4(),
            title: 'Яблоки',
            status: false
        },
        {
            id: uuid4(),
            title: 'Помидоры',
            status: false
        },
        {
            id: uuid4(),
            title: 'Лук',
            status: false
        },
    ])

    const deleteShop = (id) => {
        const filteredShops = shops.filter(shop => shop.id !== id)
        setShops(filteredShops)
    }
 
    return (
        <div>
            <Header />
            <div className="min-h-screen">
                {shops.length === 0 && (<div className="mt-20 text-center text-3xl md:text-6xl text-gray-400 font-thin">Список покупок пуст</div>)}
                {shops.length > 0 && shops.map((shop, index) => {
                    return (
                        <Shop key={shop.id} shop={shop} deleteShop={deleteShop} index={index}/>
                    )
                })}
            </div>
            <Footer />
        </div>
    )
}

export default App