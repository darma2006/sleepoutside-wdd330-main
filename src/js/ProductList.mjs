// import { getData } from "./ProductData.mjs"; 
import { renderListWithTemplate } from "./utils.mjs"; 

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  renderList(list) {
  renderListWithTemplate(
    this.productCardTemplate.bind(this),
    this.listElement,
    list
  );
}

  async init() {
    const list = await this.dataSource.getData();
    this.renderList(list);
  }

  // Template function for product card
  productCardTemplate(product) {
    return `<li class="product-card">
      <a href="product_pages/?product=${product.id}">
        <img src="${product.image}" alt="Image of ${product.name}">
        <h2 class="card__brand">${product.brand}</h2>
        <h3 class="card__name">${product.name}</h3>
        <p class="product-card__price">$${product.price}</p>
      </a>
    </li>`;
  }
}

