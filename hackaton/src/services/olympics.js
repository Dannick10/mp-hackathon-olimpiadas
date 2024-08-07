import fetchFromApi from "./api";

export async function getCountryData() {
        return await fetchFromApi('/countries')
}
export async function getDisciplineData() {
        return await fetchFromApi('/disciplines')
}

export async function getEventsData(date) {
        return await fetchFromApi(`/events${date}`)
}

export async function getEventsAllFilter(filter) {
        return await fetchFromApi(`/events${filter}`)
}

export async function getVenuesData() {
        return await fetchFromApi('/venues')
}
