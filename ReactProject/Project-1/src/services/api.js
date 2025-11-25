const BASE_URL = "http://localhost:3000";

export const getProducts = async (endPoint) => {
    const response = await fetch(`${BASE_URL}${endPoint}`);
    return await response.json();
}