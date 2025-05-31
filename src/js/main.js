import ProductList from './ProductList.mjs';
import ProductData from './ProductData.mjs';
import { loadHeaderFooter } from './utils.mjs';

// Load dynamic header and footer
loadHeaderFooter();

// Product list setup
const productListElement = document.querySelector('#product-list');
const dataSource = new ProductData('tents');
const productList = new ProductList('tents', dataSource, productListElement);
productList.init();
