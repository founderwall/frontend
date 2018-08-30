export const flattenCategoryListings = category => {
  return [
    ...category.articles,
    ...category.blogs,
    ...category.books,
    ...category.companies
  ];
};
