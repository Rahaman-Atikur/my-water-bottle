import { use } from "react";
import Bottle from "./bottle";
export default function Bottles({ bottlesPromise }) {
    const bottles = use(bottlesPromise);
    // console.log(bottles);
    return (
        <div>
            <h1>Bottles: {bottles.length}</h1>
            <div className="grid grid-cols-3">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
                }
            </div>

        </div>
    )
}