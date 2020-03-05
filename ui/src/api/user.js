/**
 * 
 * @author - Justine Paul B. Guiao
 * @date - March 5, 2020
 * @description - all API calls and their functionalities that are expected to be used should be placed here
 * 
*/

//@ MODULES
import axios from 'axios';

//@ UTILS
const {API_METHODS} = require('../util/statics');
const config = require('../config');

const api = {
  logIn: async (email, password, setState) => {
    setState({isFormLoading: true})
    return axios({
      method: API_METHODS.POST,
      url: config.DB_URL + '/login',
      data: {email, password}
    })
    .then(result => {
      console.log(result.data);
      setState({isFormLoading: false});
      return result.data;
    })
    .catch(async error => {
      setState({ hasFormErrors: true, errorMessage: "Something went wrong!", isFormLoading: false });
      throw error;
    });
  },

  register: async (email, password, verifiedPassword, personalInformation, setState) => {
    await setState({ isFormLoading: true });
    return axios({
        method: API_METHODS.POST,
        url: config.DB_URL + '/createUser',
        data: {
            email,
            password,
            verifiedPassword,
            personalInformation: JSON.stringify(personalInformation),
        }
    }).then(async result => {
        await setState({ isFormLoading: false })
        return result.data;
    }).then(error => {
        throw error;
    })
  }
}


export default api;