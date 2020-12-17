import React from 'react';

const Country = (props) => {
    // console.log(props.country);
    const {name, capital,region,flag} = props.country;
    const handleAddCountry = props.handleAddCountry;    

    const flagStyle = {
        height:"50px"
    }
    const countryStyle = {
        border:"2px solid tomato",
        margin:"10px", 
        padding:"10px"
    }
    return (
        <div style={countryStyle}>
            <h3> This is {name}</h3>
            <img style={flagStyle} src={flag} alt=""/>
            <h5> Capital: {capital}</h5>
            <h5> {region}</h5>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;