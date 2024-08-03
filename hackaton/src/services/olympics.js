import fetchFromApi from "./api";

export async function getCountryData() {
        return await fetchFromApi('/country')
}
export async function getDisciplineData() {
        return await fetchFromApi('/disciplines')
}

export async function getEventsData() {
        return await fetchFromApi('/events')
}