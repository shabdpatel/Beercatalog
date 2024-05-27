import React from 'react';

const BeerCard = ({ beer }) => {
    return (
        <div className="bg-white text-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col">
            <img
                src={beer.image}
                alt={beer.name}
                className="w-full h-48 object-cover rounded-t-md mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 text-center">{beer.name}</h2>
            <p className="text-gray-600 mb-2 text-center">{beer.style}</p>
            <p className="text-gray-800 text-center font-semibold">ABV: {beer.abv}%</p>
        </div>
    );
};

export default BeerCard;
