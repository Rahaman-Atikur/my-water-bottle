import { use, useEffect, useState } from "react";
import Bottle from "./bottle";
import { addIdToStoreCart, getStoreCart, removeFromCart } from "../../LocalStorage";
import Cart from "../Cart/Cart";

export default function Bottles({ bottlesPromise }) {
    const [cart, setCart] = useState([]);
    const bottles = use(bottlesPromise);
    <Cart cart={cart}></Cart>
    useEffect(() => {
        const storeCartIds = getStoreCart();
        const storedCart = [];
        for (const id of storeCartIds) {
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if (cartBottle) {
                storedCart.push(cartBottle);
            }
        }
        setCart(storedCart);
    }, [bottles]);

    const handleAddToCart = (bottle) => {
        const newCart = [...cart, bottle];
        getStoreCart(newCart);
        addIdToStoreCart(bottle.id);
        // Add Item to the local storage

    }
    const handleRemoveFormat = id => {
        console.log('Remove Item From the cart', id);
        const remainingCart = cart.filter(bottle => bottle.id != id);
        setCart(remainingCart);
        removeFromCart(id);
    }
    return (
        <div>
            <h1>Bottles: {bottles.length}</h1>
            <h2>Added tio the cart:{cart.length}</h2>
            <Cart cart={cart} handleRemoveFormat={handleRemoveFormat}></Cart>
            <div className="grid grid-cols-3">
                {
                    bottles.map(bottle => <Bottle handleAddToCart={handleAddToCart} key={bottle.id} bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    )
}