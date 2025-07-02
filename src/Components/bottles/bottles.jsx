import { use, useState } from "react";
import Bottle from "./bottle";
export default function Bottles({ bottlesPromise }) {
    const [cart, setCart] = useState([]);
    const bottles = use(bottlesPromise);
    // console.log(bottles);
    const handleAddToCart = () => {
        console.log("Bottle Will added to the cart");
    }
    return (
        <div>
            <h1>Bottles: {bottles.length}</h1>
            <div className="grid grid-cols-3">
                {
                    bottles.map(bottle => <Bottle handleAddToCart={handleAddToCart} key={bottle.id} bottle={bottle}></Bottle>)
                }
            </div>

        </div>
    )
}