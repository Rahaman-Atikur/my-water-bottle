import React from 'react';

const Cart = ({cart, handleRemoveFormat}) => {
    return (
        <div>
            {
                cart.map(bottle => <div key={bottle.id}>
                    <img className='w-[150px]'  src={bottle.image} alt="" />
                    <button onClick={()=>handleRemoveFormat(bottle.id)} className='btn'>X</button>
                </div>)
            }
        </div>
    );
};

export default Cart;