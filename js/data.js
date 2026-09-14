export async function getData() {
    const response = await fetch("./data/offers.json");
    const data = await response.json()
    return data;
}