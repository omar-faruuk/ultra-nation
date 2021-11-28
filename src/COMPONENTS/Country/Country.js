import React from 'react';

const Country = (props) => {
    const { name, population, region, flags } = props.country;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div>
            <h4>This is {name.common}</h4>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick={() => handleAddCountry(props.country)}>Add country</button>
        </div>
    );
};

export default Country;