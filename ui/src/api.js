/**
 * 
 * @createdBy - Justine Paul B. Guiao
 * @date - March 5, 2020
 * @description - all API calls and their functionalities that are expected to be used should be placed here
 * 
*/
import axios from 'axios';

const {API_METHODS} = require('./statics');
const config = require('./config');

const logIn = (username, password) => {
    return axios({
        method: API_METHODS.POST,
        url: config.DB_URL,
        data: {username, password}
    })
    .then(result => {
        return result.data;
    })
    .catch(error => {
        console.log(error);
        throw error;
    })
}

module.exports = {
    logIn,
}