export const listingIsInSearch = (listing, filterQuery) => {
  if (!filterQuery) {
    return true;
  }
  return listing.title.toLowerCase().indexOf(filterQuery.toLowerCase()) >= 0;
};
