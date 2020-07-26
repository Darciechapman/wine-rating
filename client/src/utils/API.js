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