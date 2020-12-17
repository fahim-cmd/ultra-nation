import React from 'react';

const Land = (props) => {
    const land = props.land;
    let totalLand = 0;
    for (let i = 0; i < land.length; i++) {
        const landAria = land[i];
        totalLand = totalLand  + landAria.population;
    }

    return (
        <div>
            <h1>Population: {totalLand}</h1>
        </div>
    );
};

export default Land;