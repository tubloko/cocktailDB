import axios from 'axios';

export default class API {
    getAllCocktails (filter) {
        return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter}`)
            .then(response => response.data)
            .catch(err => err);
    }
    getAllFilters () {
        return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
            .then(response => response.data)
            .catch(err => err);
    }
}
