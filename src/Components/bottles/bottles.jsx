import { use } from "react"

export default function Bottles({bottlesPromise}) {
    const bottles = use(bottlesPromise);
    console.log(bottles);
    return (
        <div>

        </div>
    )
}