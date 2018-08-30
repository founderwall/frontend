import React from "react";
import Index from "./index";
import { getCategory } from "../utils/api";

export default class Category extends Index {
  DEFAULT_CATEGORY_COLUMN_SIZE = 12;
  SEARCH_PLACEHOLDER = `Filter this category`;

  static async getInitialProps({ query }) {
    const category = await getCategory(query.category);
    return { categories: [category] };
  }
}
