import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' });



export const productInfoName = (data) => API.post('/product/productName', data);
export const productInfoBarcode = (data) => API.post('/product/barcode', data);


//Call for nutrition product
//https://de.openfoodfacts.org/cgi/search.pl?search_terms=monster+ultra+paradise&action=process&json=true
//Barcode
//https://de.openfoodfacts.org/api/v0/product/5060639129287.json
/*