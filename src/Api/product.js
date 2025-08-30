import { BASE_URL } from "./api";

export async function getAllProduct() {
    const data = await fetch(`${BASE_URL}products`)
    .then((response) => response.json());
    return data;
}
