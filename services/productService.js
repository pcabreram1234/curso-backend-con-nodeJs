const { faker } = require('@faker-js/faker');

class ProductsService {
  constructor() {
    /* Al guardar los datos en un array en memoria luego de hacer el return con el metodo generate
    siempre mostrara los mismo productos, ya que devolvera el valor de la propiedad products y no de la API fakers */
    this.products = [];
    this.generate();
  }

  generate() {
    this.products = [];
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
  }

  create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 3000);
    });
  }

  findeOne(id) {
    return this.products.find((item) => item.id === id);
  }

  async update(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Product not found!');
    } else {
      const currentProduct = this.products[index];
      this.products[index] = { ...currentProduct, ...changes };
      return this.products[index];
    }
  }

  delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Product not found!');
    } else {
      this.products.splice(index, 1);
      return {
        message: `El producto con el id${id} ha sido borrado`,
      };
    }
  }
}

module.exports = ProductsService;
