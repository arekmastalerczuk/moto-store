import React from "react";
import { fetchUserFavorites } from "@/utils/actions";
import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";

async function FavoritesPage() {
  const favorites = await fetchUserFavorites();

  return (
    <>
      <SectionTitle title="Favorites" />
      {favorites.length === 0 && <p className="mt-8">No favorites found.</p>}
      {favorites.length > 0 && (
        <ProductsGrid
          products={favorites.map((favorite) => favorite.product)}
        />
      )}
    </>
  );
}

export default FavoritesPage;
