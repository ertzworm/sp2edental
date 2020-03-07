/**
 * @createdBy - Justine Paul B. Guiao
 * @createdDate - March 5, 2020
 * @description - All data validator functions should be placed here
*/

module.exports = {
  validateEmail: (email) => {
    // eslint-disable-next-line
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return true; 
    else return false;
  }
}