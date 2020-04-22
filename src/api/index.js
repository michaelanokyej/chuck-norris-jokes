import Axios from "axios";

const url = "https://api.chucknorris.io/jokes/random";

export const fetchRandomJoke = async (category) => {
  let dynamicUrl = url;
  if (category) {
    dynamicUrl = `${url}?category=${category}`;
  }
  try {
    const { data:  {value, icon_url } } = await Axios.get(dynamicUrl)
    return { value, icon_url }
  } catch (error) {
    console.log(error);
  }
};

export const fetchJokeCategories = async () => {
  try {
    const { data } = await Axios.get("https://api.chucknorris.io/jokes/categories/")
    return { data };
  } catch (error) {
    console.log(error)
  }
}
