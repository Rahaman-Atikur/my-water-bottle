import React from 'react';
const bottle = ({ bottle, handleAddToCart }) => {
    console.log(bottle);
    return (
        <div >
            <div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src={bottle.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{bottle.brand}</h2>
                        <p>{bottle.material}</p>
                        <div className="card-actions justify-end">
                            <button onClick={() => handleAddToCart(bottle)} className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default bottle;
