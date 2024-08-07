const API_BASE_URL = 'https://apis.codante.io/olympic-games';

async function fetchFromApi(endpoint){
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    return response.json();


  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export default fetchFromApi;
