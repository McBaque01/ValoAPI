import axios from 'axios'

async function fetchTitle() {
    try {
        const response = await axios.get('https://valorant-api.com/v1/playertitles');
        return response.data.data;
    } catch (error) {
        console.error('Error fetching agents:', error);
        return null; // Return null in case of error
    }
}


export default fetchTitle