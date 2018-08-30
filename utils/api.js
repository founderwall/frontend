import fetch from "cross-fetch";

const API_ROOT = "https://api.founderwall.com";

export const getFeaturedCategories = async () => {
  const req = await fetch(`${API_ROOT}/categories/featured`);
  const categories = await req.json();
  return categories;
};

export const getCategory = async slug => {
  const req = await fetch(`${API_ROOT}/categories/${slug}`);
  const category = await req.json();
  return category;
};
