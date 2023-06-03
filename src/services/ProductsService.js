import $api from "../http";

export default class ProductsService {
  static async addToFavorite(id, username) {
    return await $api.post(`/products/addtofavorite`, {
      id, username
    });
  }

  static async removeFromFavorite(id, username) {
    return await $api.post(`/products/deletefromfavorite`, {
      id, username
    })
  }

  static async getProductsByName(name) {
    return await $api.get(`/products/getproductlistwithname?name=${name}`);
  }

  static async getProductById(id) {
    return await $api.get(`/products/getproduct?id=${id}`);
  }

  static async getProductsByCategory(category_id) {
    return await $api.get(`/products/getproductlistwithcategory?id=${category_id}`);
  }

  static async getAllCategories() {
    return await $api.get(`/productscategory/getproductscategorys`);
  }

  static async getProductComments(id) {
    return await $api.get(`/products/getcommentslist?id=${id}`);
  }
}