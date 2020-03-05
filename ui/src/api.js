/**
 * 
 * @createdBy - Justine Paul B. Guiao
 * @date - March 5, 2020
 * @description - all API calls and their functionalities that are expected to be used should be placed here
 * 
*/

//@ MODULES
import axios from 'axios';

//@ UTILS
const {API_METHODS} = require('./statics');
const config = require('./config');

const api = {
    logIn: (email, password) => {
        return axios({
            method: API_METHODS.POST,
            url: config.DB_URL + "/login",
            data: {email, password}
        })
        .then(result => {
            return result.data;
        })
        .catch(error => {
            console.log(error);
            throw error;
        })
    }
}


export default api;