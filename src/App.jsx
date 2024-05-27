import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BeerCard from './components/BeerCard';
import SearchBar from './components/SearchBar';

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBeers, setFilteredBeers] = useState([]);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get('https://api.sampleapis.com/beers/ale');
        setBeers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchBeers();
  }, []);

  useEffect(() => {
    setFilteredBeers(
      beers.filter((beer) =>
        beer.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, beers]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-white">Beer Catalog</h1>
      <div className="w-full max-w-6xl">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBeers.map((beer) => (
            <BeerCard key={beer.id} beer={beer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
