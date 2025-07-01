import 'Components/bottle.css'
export default function Bottle({bottle}) {
    console.log(bottle);
    return (
        <div className="bottle-container">
           <h2>{bottle.brand}</h2>
           <img src={bottle.image} alt="" />
        </div>
    )
}