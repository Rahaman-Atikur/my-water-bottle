import { use, useEffect, useState } from "react";
import Bottle from "./bottle";
import { addItSt, getCartLS } from "../../LocalStorage";
export default function Bottles({ bottlesPromise }) {
    const [cart, setCart] = useState([]);
    const bottles = use(bottlesPromise);
   useEffect(() => {
        const storeCartIds = getCartLS();
        const storedCart = [];
        for (const id of storeCartIds) {
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if (cartBottle) {
                storedCart.push(cartBottle);
            }
        }
        setCart(storedCart);
    }, [bottles]);


    // console.log(bottles);
    const handleAddToCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);

        addItSt(bottle.id);
    }
    return (
        <div>
            <h1>Bottles: {bottles.length}</h1>
            <h2>Added tio the cart:{cart.length}</h2>
            <div className="grid grid-cols-3">
                {
                    bottles.map(bottle => <Bottle handleAddToCart={handleAddToCart} key={bottle.id} bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    )
}