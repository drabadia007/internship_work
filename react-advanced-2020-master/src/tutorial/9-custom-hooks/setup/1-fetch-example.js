import React, { useState, useEffect } from "react";
import { useFetch } from "./2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
// why useFetch or custom hooks
// in this example we have set a functionality of fetching the API in other file and imported it as a cutom hook so we need to code less for it and it can also be used in other components as per requirement
const url = "https://course-api.com/javascript-store-products";

const Example = () => {
  const { loading, products } = useFetch(url);

  console.log(products);
  return (
    <div>
      <h2>{loading ? "loading..." : "data"}</h2>
    </div>
  );
};

export default Example;
