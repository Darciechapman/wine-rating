import axios from 'axios';

export const getSavedWines = function () {
        return axios.get('/api/wines');
    }
export const saveWine = function (wineData) {
        return axios.post('/api/wines', wineData)
    }
export const deleteWine = function (wineId) {
        return axios.delete(`/api/wines/${wineId}`);
    }

// export const searchGlobalWine = function(query){
//     return axios.get('https://www.globalwinescore.com/api/' + 'aac290d66032158b705324f7353ae347849ff944', { params: { q: query } });
// };