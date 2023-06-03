import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../context";
import { useFetching } from "../hooks/useFetching";
import UsersService from "../services/UsersService";
import FavoriteProductCard from "./FavoriteProductCard/FavoriteProductCard";
import TotalCostCard from "./TotalCostCard";

const Favorites = () => {
  const { user } = useContext(AuthContext);

  const [totalCost, setTotalCost] = useState(0);
  const [favorites, setFavorites] = useState([]);

  const [fetchProducts, isLoading, errors] = useFetching(async () => {
    const response = await UsersService.getFavoriteProducts(user.username);
    setFavorites(response.data.answer);
  })

  useEffect(() => {
    if (user.username)
      fetchProducts();
  }, [user]);

  return (
    <>
      {
        favorites && favorites.length > 0
        ? <>
            {
              favorites.map(favorite =>
                <FavoriteProductCard setTotal={setTotalCost}
                                     fetch={fetchProducts} key={favorite}
                                     username={user.username} id={favorite}/>)
            }
            <TotalCostCard total={totalCost}/>
          </>
        : <h4 className="mt-3 mb-3 text-center">Список пуст</h4>
      }
    </>
  );
};

export default Favorites;