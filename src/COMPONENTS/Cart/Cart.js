import React from 'react';

const Cart = (props) => {
    let population = 0;
    const cart = props.cart;
    for (let i = 0; i < cart.length; i++) {
        const country = cart[i];
        population = population + country.population;

    }
    return (
        <div>
            <h4>Country added:{cart.length}</h4>
            <p>Population: {population}</p>
        </div>
    );
};

export default Cart;