import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../components/Loading';

function SingleCocktail() {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCocktail = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();

        if (data.drinks) {
          setCocktail(data.drinks[0]);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.error('Error fetching cocktail:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCocktail();
  }, [id]);

  if (loading) {
    return <Loading color='black' />
  }

  if (error) {
    return <div>Error fetching cocktail details.</div>;
  }

  if (!cocktail) {
    return <div>No cocktail found.</div>;
  }

  // Destructure cocktail data
  const { strDrink, strDrinkThumb, strAlcoholic, strGlass, strInstructions, strCategory } = cocktail;

  return (
    <div className="max-w-md mx-auto p-4 text-center  shadow-black/30 rounded-lg shadow-lg">
      <img src={strDrinkThumb} alt={strDrink} className="w-full rounded-lg mb-4" />
      <h2 className="text-2xl font-semibold mb-2">{strDrink}</h2>
      <p className="text-gray-700">{strCategory} - {strAlcoholic}</p>
      <p className="mt-4 text-sm text-gray-500">{strInstructions}</p>
      <p className="mt-2 text-gray-700 font-medium">Served in: {strGlass}</p>
      <Link to='/'><button className=' mt-2 w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800'>back to home</button></Link>
    </div>
  );
}

export default SingleCocktail;
