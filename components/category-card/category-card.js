import React from "react";
import Link from "next/link";
import TooltipItem from "../tooltip-item/tooltip-item";
import { extractHostname } from "../../utils/hostname";
import { listingIsInSearch } from "../../utils/listing";
import { flattenCategoryListings } from "../../utils/category";

const CategoryCard = ({ category, filterQuery = "" }) => {
  const listings = flattenCategoryListings(category);
  const isHidden = !listings.find(listing =>
    listingIsInSearch(listing, filterQuery)
  );

  return (
    <div className={`card box-shadow ${isHidden ? "fade-out" : ""}`}>
      <div className="card-header">
        <Link href={`/category/${category.slug}`}>
          <a>{category.title}</a>
        </Link>
      </div>
      <ul className="list-group list-group-flush">
        {listings
          .filter(listing => listingIsInSearch(listing, filterQuery))
          .map(listing => (
            <li className="list-group-item" key={listing.slug}>
              <div
                className="item-favicon"
                style={{
                  backgroundImage: `url('https://www.google.com/s2/favicons?domain=${extractHostname(
                    listing.website
                  )}')`
                }}
              />
              <a href={listing.website} target="_blank">
                <TooltipItem title={listing.pitch}>{listing.title}</TooltipItem>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CategoryCard;
