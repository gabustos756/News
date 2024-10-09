const API_KEY = "8ab9f6a80b5241b4ba7f0b3938ea683e";
const BASE_URL = "https://newsapi.org/v2";

export const fetchNews = async (keyword = "") => {
  try {
    const response = await fetch(
      `${BASE_URL}/everything?q=${keyword}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    if (data.status !== "ok") {
      throw new Error("Error al obtener noticias");
    }
    return data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};