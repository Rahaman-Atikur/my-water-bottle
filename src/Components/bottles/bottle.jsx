import React from 'react';

const bottle = ({ bottle }) => {
    console.log(bottle);
    return (
        <div >
            <div >
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
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default bottle;

// img src={bottle.image} alt="" />
//             <h3>{bottle.brand}</h3>
//             <h4>${bottle.priceUSD}</h4>
//             <button className='btn'>Buy Now</button>
