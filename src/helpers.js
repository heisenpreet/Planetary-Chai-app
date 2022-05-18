//reusable functions

import { TIMEOUT_SEC } from "./config.js";

const timeout = (seconds) => {
  return new Promise((_, reject) =>
    setTimeout(() => {
      reject(new Error("Took Too Long , SLOW INTERNET"));
    }, seconds * 1000)
  );
};

export const getJSON = async (url) => {
  try {
    // const recipeData = await fetch(url);

    const recipeData = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    const recipeResponse = await recipeData.json();

    if (recipeResponse.hasOwnProperty("error")) {
      throw new Error(recipeResponse.error);
    }

    return recipeResponse;
  } catch (error) {
    throw error;
  }
};
