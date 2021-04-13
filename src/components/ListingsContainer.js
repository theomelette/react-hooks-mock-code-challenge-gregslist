import React from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDelete}) {
  const allListings = listings.map((listing) => {
  return (
    <ListingCard 
      key={listing.id}
      listing={listing}
      onDelete={onDelete}/>
      )
  })
  return (
    <main>
      <ul className="cards">
        {allListings}
      </ul>
    </main>
  );
  }

export default ListingsContainer;
